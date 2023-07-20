import express from "express"
import mongoose from "mongoose"
import {registrationValidation} from './validations/auth.js'
import checkAuth from './utils/checkAuth.js';
import cors from 'cors';
import {
    deleteMe,
    forgotPassword,
    getMe,
    login, messageSupport,
    registration,
    resetPassword, updateUser,
    uploadAvatar
} from "./controllers/UserController.js";
import {
    getMatrixHistorySearchPersonal,
    getPdfPersonal,
    MathMatrixCalculation
} from "./controllers/MathMatrixController.js";
import Stripe from 'stripe'
import cookieParser from 'cookie-parser';
import UserModel from "./models/User.js";
import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
    getMatrixHistorySearchChildren,
    getPdfChildren,
    MathMatrixChildCalculation
} from "./controllers/MathMatrixChildController.js";
import {
    getMatrixHistorySearchCompatibility, getPdfCompatibility,
    MathMatrixCompatibilityCalculation
} from "./controllers/MathMatrixCompatibilityController.js";


const endpointSecret = "whsec_ZCreQTgRtWy4Okibu2aKGj3FK9M2x8WR";
const endpointSecretOnce = "whsec_Nhh5tpzEiupXlibKR1ZpKb5627bulChu";
const stripe = new Stripe('sk_test_51MbiblK8sK2Q56UdrLSKQew95sg3eeUhGI5NyfZUXL2nZbpE33M8IucKAUuZSTd8gcCNKU0EudSd20bXUZdjz3FG00agPadgr9');

const corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: true,
};

const app = express()
app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
        next();
    } else {
        express.json({limit: '50mb'})(req, res, next);
    }
});
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(cors(corsOptions))
mongoose.set("strictQuery", false);
app.use(cookieParser());

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://igorka:281296Igor@cluster0.c8d2egx.mongodb.net/?retryWrites=true&w=majority')

        console.log('Server OK')
    } catch (e) {
        console.log('error:', e);
    }
}
start();
app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
})

app.post('/auth/registration', registrationValidation, registration);
app.post('/auth/login', login);
app.get('/auth/me', checkAuth, getMe);
app.get('/history-personal-matrix', checkAuth, getMatrixHistorySearchPersonal);
app.get('/history-children-matrix', checkAuth, getMatrixHistorySearchChildren);
app.get('/download-pdf', getPdfPersonal);
app.get('/download-pdf-children', getPdfChildren);
app.get('/download-pdf-compatibility', getPdfCompatibility);
app.get('/history-compatibility-matrix', checkAuth, getMatrixHistorySearchCompatibility);
app.post('/math-matrix', MathMatrixCalculation);
app.post('/math-matrix-child', MathMatrixChildCalculation);
app.post('/math-matrix-compatibility', MathMatrixCompatibilityCalculation);
app.delete('/delete', deleteMe);
app.put('/forgot-password', forgotPassword);
app.put('/reset-password', resetPassword);
app.put('/upload', uploadAvatar);
app.put('/update', updateUser);
app.post('/support-message', messageSupport);


app.post('/checkout', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            metadata: {
                product_name: req.body.items.item.name,
                product_price: req.body.items.item.price,
                gender: req.body.items.item?.gender,
                username: req.body.items.item?.username,
                dateuser: req.body.items.item?.date,
                matrix: req.body.items.item?.matrix,
                date1: req.body.items.item?.date1,
                date2: req.body.items.item?.date2
            },
            mode: 'payment',
            submit_type: 'pay',
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'rub',
                        unit_amount: req.body.items.item.price,
                        product_data: {
                            metadata: {orderId: '12345'},
                            name: req.body.items.item.name,
                            description: 'Описание товара',
                        }
                    },
                }],
            success_url: `http://localhost:3000/MyMatrix/${req.body.items.item.name === 'Разовая расшифровка даты' ? `success-date-once?matrix=${req.body.items.item.matrix === 'personal' ? req.body.items.item.matrix + '&date=' + req.body.items.item?.date + '&gender=' + req.body.items.item.gender + '&name=' + req.body.items.item.username : req.body.items.item.matrix === 'child' ? req.body.items.item.matrix + '&date=' + req.body.items.item?.date + '&gender=' + req.body.items.item.gender + '&name=' + req.body.items.item.username : req.body.items.item.matrix + '&date1=' + req.body.items.item.date1 + '&date2=' + req.body.items.item.date2 }` : req.body.items.item.name === 'Видео-курс' ? 'success-lesson' : 'success'}`,
            cancel_url: 'http://localhost:3000/MyMatrix/error',
            client_reference_id: req.body.items.id,

        })
        res.json({url: session.url})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
})
const maxAges = 30 * 24 * 37.35 * 100000;
app.post('/checkout-no-registr', async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.registration.password, salt)
        const findUser = await UserModel.findOne({email: req.body.registration.email})
        if (findUser) {
            return res.status(500).json({message: 'Пользватель с таким Email уже существует, войдите в свой аккаунт и продолжите оформление заказа'})
        }

        const doc = new UserModel({
            email: req.body.registration.email,
            name: req.body.registration.name,
            surname: req.body.registration.surname,
            phone: req.body.registration.phone,
            avatarURL: '',
            subscription: [{subscribe: 'Матрица на месяц', expiresSub: 0, access: false}, {
                subscribe: 'Вместе и навсегда',
                access: false
            }, {
                subscribe: 'Видео-курс',
                access: false
            }, {
                subscribe: 'Видео-курс + Вместе и навсегда',
                access: false
            }, {subscribe: 'Пробный', access: false, personal: 0, children: 0, compatibility: 0}],
            matrixSearchHistory: {
                personal: [],
                children: [],
                compatibility: []
            },
            passwordHash: hash,
            totalAmount: 0
        })
        const user = await doc.save();
        const token = jwt.sign({
                _id: user._id
            }, 'secret123',
            {
                expiresIn: '30d'
            })
        const {passwordHash, ...userData} = user._doc
        if (req.body.check) {
            res.cookie('token', token, {
                httpOnly: false,
                maxAge: maxAges,
                sameSite: 'strict',
                secure: true,
                path: '/'
            })
        } else {
            res.cookie('token', token, {
                httpOnly: false,
                sameSite: 'strict',
                secure: true,
                path: '/'
            })
        }
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            metadata: {
                product_name: req.body.item.name,
                product_price: req.body.item.price,
                dateuser: req.body.item?.date,
                gender: req.body.item?.gender,
                username: req.body.item?.username,
                matrix: req.body.item?.matrix,
                date1: req.body.item?.date1,
                date2: req.body.item?.date2
            },
            mode: 'payment',
            submit_type: 'pay',
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'rub',
                        unit_amount: req.body.item.price,
                        product_data: {
                            metadata: {orderId: '12345'},
                            name: req.body.item.name,
                            description: 'Описание товара',
                        }

                    },
                }],
            success_url: `http://localhost:3000/MyMatrix/${req.body.item.name === 'Разовая расшифровка даты' ? `success-date-once?matrix=${req.body.item.matrix === 'personal' ? req.body.item.matrix + '&date=' + req.body.item?.date + '&gender=' + req.body.item.gender + '&name=' + req.body.item.username : req.body.item.matrix === 'child' ? req.body.item.matrix + '&date=' + req.body.item?.date + '&gender=' + req.body.item.gender + '&name=' + req.body.item.username : req.body.item.matrix + '&date1=' + req.body.item.date1 + '&date2=' + req.body.item.date2 }` : req.body.item.name === 'Видео-курс' ? 'success-lesson' : 'success'}`,
            cancel_url: 'http://localhost:3000/MyMatrix/error',
            client_reference_id: user._id.toString(),
        })
        res.json({...userData, token, url: session.url})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегестрироваться',
        })
    }
})


const maxAge = 30 * 24 * 37.35 * 100000;
const expires = Date.now() + maxAge;
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
    let event;
    const sig = req.headers['stripe-signature'];
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
    // Handle the event
    switch (event.type) {
        case 'checkout.session.async_payment_failed':
            const checkoutSessionAsyncPaymentFailed = event.data.object;
            console.log('failed')
            break;
        case 'checkout.session.async_payment_succeeded':
            const checkoutSessionAsyncPaymentSucceeded = event.data.object;
            // Then define and call a function to handle the event checkout.session.async_payment_succeeded
            console.log('ok')
            break;
        case 'checkout.session.completed':
            const checkoutSessionCompleted = event.data.object;
            const metadata = checkoutSessionCompleted.metadata
            const user = await UserModel.findById(checkoutSessionCompleted.client_reference_id)
            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден',
                })
            }
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
            const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            user._doc.historyOfOrders.push({
                name: metadata.product_name,
                date: dateString,
                price: metadata.product_price
            })

            let matrixSearchHistory;
            if (metadata.matrix === 'personal') {
                matrixSearchHistory = [...user._doc.matrixSearchHistory.personal, {
                    gender: metadata.gender,
                    name: metadata.username,
                    date: metadata.dateuser
                }]
            } else if (metadata.matrix === 'child') {
                matrixSearchHistory = [...user._doc.matrixSearchHistory.children, {
                    gender: metadata.gender,
                    name: metadata.username,
                    date: metadata.dateuser
                }]
            } else if (metadata.matrix === 'compatibility') {
                matrixSearchHistory = [...user._doc.matrixSearchHistory.compatibility, {
                    datePartnerOne: metadata.date1,
                    datePartnerTwo: metadata.date2
                }]
            }
            const updateUser = await UserModel.findByIdAndUpdate(checkoutSessionCompleted.client_reference_id, {
                historyOfOrders: [...user._doc.historyOfOrders],
                subscription: user._doc.subscription.map(e => {
                    if ('Пробный' === e.subscribe && metadata.product_name === 'Пробный') {
                        return {
                            ...e,
                            personal: 1 + e.personal,
                            access: true,
                            children: 1 + e.children,
                            compatibility: 1 + e.compatibility
                        }
                    } else if ('Видео-курс + Вместе и навсегда' === e.subscribe && metadata.product_name === 'Видео-курс + Вместе и навсегда') {
                        return {...e, access: true}
                    } else if ('Видео-курс' === e.subscribe && metadata.product_name === 'Видео-курс') {
                        return {...e, access: true}
                    } else if ('Вместе и навсегда' === e.subscribe && metadata.product_name === 'Вместе и навсегда') {
                        return {...e, access: true}
                    } else if ('Матрица на месяц' === e.subscribe && metadata.product_name === 'Матрица на месяц') {
                        return {...e, expiresSub: e.expiresSub !== 0 ? maxAge + e.expiresSub : expires, access: true}
                    }
                    return e
                }),
                totalAmount: user._doc.totalAmount + checkoutSessionCompleted.amount_total,
                ['matrixSearchHistory.personal']: metadata.matrix === 'personal' ? matrixSearchHistory : user._doc.matrixSearchHistory.personal,
                ['matrixSearchHistory.children']: metadata.matrix === 'child' ? matrixSearchHistory : user._doc.matrixSearchHistory.children,
                ['matrixSearchHistory.compatibility']: metadata.matrix === 'compatibility' ? matrixSearchHistory : user._doc.matrixSearchHistory.compatibility
            }, {new: true});
            if (!updateUser) {
                return res.status(404).json({
                    message: 'Пользователь не найден',
                })
            }

            const {passwordHash, resetPasswordExpires, resetPasswordToken, ...userData} = updateUser._doc
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    res.status(200).json({received: true});
});
