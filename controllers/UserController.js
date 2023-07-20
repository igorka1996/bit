import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from 'crypto'
import nodemailer from 'nodemailer'
const maxAge = 30 * 24 * 37.35 * 100000;
export const registration = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        const findUser = await UserModel.findOne({email: req.body.email})
        if (findUser) {
            return res.status(500).json({message: 'Пользватель с таким Email уже существует'})
        }
        const doc = new UserModel({
            email: req.body.email,
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            passwordHash: hash,
            avatarURL: '',
            historyOfOrders: [],
            matrixSearchHistory: {
                personal: [],
                children: [],
                compatibility: []
            },
            subscription: [{subscribe: 'Матрица на месяц', expiresSub: 0, access: false}, {subscribe: 'Вместе и навсегда',
                access: false}, {subscribe: 'Видео-курс',
                access: false}, {subscribe: 'Видео-курс + Вместе и навсегда',
                access: false}, {subscribe: 'Пробный', personal: 0, children: 0, compatibility: 0, access: false}],
            totalAmount: 0
        })
        const user = await doc.save();
        const token = jwt.sign({
                _id: user._id
            }, 'secret123',
            {
                expiresIn: '30d'
            })
        const {passwordHash, matrixSearchHistory, ...userData} = user._doc
        if (req.body.check) {
            res.cookie('token', token, {
                // httpOnly: false,
                maxAge: maxAge,
                // sameSite: 'strict',
                // secure: true,
                path: '/'
            })
        } else {
            res.cookie('token', token, {
                // httpOnly: false,
                // sameSite: 'strict',
                // secure: true,
                path: '/'
            })
        }
        res.json({...userData, token})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегестрироваться',
        })
    }
}
export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
        if (!isValidPass) {
            return res.status(404).json({
                message: 'Неверный логин или пароль',
            })
        }
        const token = jwt.sign({
                _id: user._id
            }, 'secret123',
            {
                expiresIn: '30d'
            })
        const {avatarURL, passwordHash, matrixSearchHistory, ...userData} = user._doc
        if (req.body.check) {
            res.cookie('token', token, {
                maxAge: maxAge,
                // httpOnly: false,
                // sameSite: 'strict',
                // secure: true,
                path: '/'
            })
        } else {
            res.cookie('token', token, {
                // httpOnly: false,
                // sameSite: 'strict',
                // secure: true,
                path: '/'
            })
        }
        const imageDataUrl = `data:image/jpeg;base64,${avatarURL}`;
        res.json({...userData, token, avatar: imageDataUrl})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось авторизоваться',
        })
    }
}
export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        const updatedSubscription = user.subscription.map(sub => {
            if (sub.subscribe === 'Матрица на месяц' && sub.expiresSub < Date.now()) {
                return { ...sub, access: false, expiresSub: 0 };
            } else if(sub.subscribe === "Пробный" && sub.personal === 0 && sub.children === 0 && sub.compatibility === 0) {
                return {...sub, access: false}
            } else {
                return sub;
            }
        });
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        const updatedUser = await UserModel.findByIdAndUpdate(req.userId,
            {
                subscription: updatedSubscription
            },
            { new: true }
        );

        const {avatarURL, passwordHash, matrixSearchHistory, ...userData} = updatedUser._doc
        const imageDataUrl = `data:image/jpeg;base64,${avatarURL}`;
        res.json({...userData, avatar: imageDataUrl})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Нет доступа',
        })
    }
}
export const deleteMe = async (req, res) => {
    try {
        await res.clearCookie('token', {path: '/', sameSite: 'none', secure: 'auto'})
        res.json({'clearSession': 'success'})
    } catch (err) {
        res.status(500).json({
            message: 'Ошибка'
        })
    }
}

const transporter = nodemailer.createTransport({
    service: "Mail.ru",
    auth: {
        user: 'igazarov@mail.ru',
        pass: '2HyHC4hVtGcP0gBFVm8p',
    },
});
export const forgotPassword = async (req, res) => {
    try {
        const token = crypto.randomBytes(20).toString('hex');
        const expires = Date.now() + 36000;
        const user = await UserModel.findOneAndUpdate(
            req.body.email,
            {
                resetPasswordToken: token,
                resetPasswordExpires: expires,
            }
        );
        if (!user) {
            return res.status(404).json({message: 'Пользователь не найден'});
        }
        const mailOptions = {
            from: 'igazarov@mail.ru',
            to: req.body.email,
            subject: 'Восстановление пароля',
            html: `<div>Для восстановления пароля перейдите по ссылке: <a href=http://localhost:3000/MyMatrix/reset-password/${token}>ссылка на изменения пароля</a></div>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({message: 'Ошибка отправки электронной почты'});
            }
            res.status(200).json({message: 'Письмо для восстановления пароля отправлено'});
        });
    } catch (e) {
        res.status(500).json({
            message: 'Ошибка'
        })
    }
}
export const messageSupport = async (req, res) => {
    try {
        const mailOptions = {
            from: 'igazarov@mail.ru',
            to: 'igazarov@mail.ru',
            subject: req.body.subject,
            html: `<div>${req.body.message + ' ' + req.body.email}</div>`,
        };
       await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                return res.status(500).json({message: 'Ошибка отправки электронной почты'});
            }
            res.status(200).json({message: 'Ваше сообщение успешно отправлено'});
        });
    } catch (e) {
        res.status(500).json({
            message: 'Ошибка'
        })
    }
}
export const resetPassword = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            resetPasswordToken: req.body.token,
            resetPasswordExpires: {$gt: Date.now()},
        });
        console.log(user.resetPasswordExpires)
        if (!user) {
            return res.status(401).json({message: 'Токен недействителен или истек срок его действия'});
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        await UserModel.findByIdAndUpdate(user._id, {
            passwordHash: hash,
            resetPasswordToken: null,
            resetPasswordExpires: null,
        });
        res.status(200).json({message: 'Пароль успешно изменен'});
    } catch (e) {
        res.status(500).json({
            message: 'Ошибка'
        })
    }
}
export const uploadAvatar = async (req, res) => {
    try {
        const findUser = await UserModel.findByIdAndUpdate(req.body.userId,
            {
                avatarURL: req.body.avatar
            })
        if (!findUser) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        const encodedImage = req.body.avatar
        const imageDataUrl = `data:image/jpeg;base64,${encodedImage}`;
        res.status(200).json({avatar: imageDataUrl});
    } catch (err) {
        res.status(500).json({message: 'Неудалось загрузить картинку'});
    }
}
export const updateUser = async (req, res) => {
    try {
        const { userId, name, surname, phone, email, password } = req.body;

        if (!userId) {
            return res.status(400).json({ message: 'Не указан ID пользователя' });
        }

        const updateFields = {
            name,
            surname,
            phone,
            email,
        };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateFields.passwordHash = await bcrypt.hash(password, salt);
        }

        const findUser = await UserModel.findOneAndUpdate(
            { _id: userId },
            updateFields,
            { new: true }
        );

        if (!findUser) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            });
        }
        const { avatarURL, passwordHash, ...userData } = findUser._doc;
        res.status(200).json({...userData, message: 'Данные успешно обновлены'});
    } catch (err) {
        res.status(500).json({ message: 'Не удалось обновить ваши данные' });
    }
};