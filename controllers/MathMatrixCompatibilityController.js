import MathMatrixModel from "../models/MathMatrixCompatibility.js";
import filterCalcLite from "../utils/func.js"
import Users from "../models/User.js";
import UserModel from "../models/User.js";
import {v4 as uuidv4} from "uuid";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";


export const MathMatrixCompatibilityCalculation = async (req, res) => {
    let response;
    //isWhyDidYouMeet
    const queryIsWhyDidYouMeet = req.query.isWhyDidYouMeet.split(',');
    //isTheSpiritualEssenceOfTheCouple
    const queryIsTheSpiritualEssenceOfTheCouple = req.query.isTheSpiritualEssenceOfTheCouple.split(',');
    //isMaterialKarma
    const queryIsMaterialKarma = req.query.isMaterialKarma.split(',');
    //isCouplesSpiritualKarma
    const queryIsCouplesSpiritualKarma = req.query.isCouplesSpiritualKarma.split(',');
    //isGenericTasksOfPartners
    const queryIsGenericTasksOfPartners = req.query.isGenericTasksOfPartners.split(',');
    //isCouplesWellBeing
    const queryIsCouplesWellBeing = req.query.isCouplesWellBeing.split(',');
    //isThePurposeOfTheCouple
    const queryIsThePurposeOfTheCouple = req.query.isThePurposeOfTheCouple.split(',');

    const result = await MathMatrixModel.findOne({_id: "6464a3d5788b78ec34fa3ee6"})
    //isWhyDidYouMeet
    const isWhyDidYouMeet1 = filterCalcLite(result.isWhyDidYouMeet, parseInt(queryIsWhyDidYouMeet[0]))
    const isWhyDidYouMeet2 = filterCalcLite(result.isWhyDidYouMeet, parseInt(queryIsWhyDidYouMeet[1]))
    const isWhyDidYouMeet3 = filterCalcLite(result.isWhyDidYouMeet, parseInt(queryIsWhyDidYouMeet[2]))
    //isTheSpiritualEssenceOfTheCouple
    const isTheSpiritualEssenceOfTheCouple1 = filterCalcLite(result.isTheSpiritualEssenceOfTheCouple, parseInt(queryIsTheSpiritualEssenceOfTheCouple[0]))
    const isTheSpiritualEssenceOfTheCouple2 = filterCalcLite(result.isTheSpiritualEssenceOfTheCouple, parseInt(queryIsTheSpiritualEssenceOfTheCouple[1]))
    const isTheSpiritualEssenceOfTheCouple3 = filterCalcLite(result.isTheSpiritualEssenceOfTheCouple, parseInt(queryIsTheSpiritualEssenceOfTheCouple[2]))
    //isMaterialKarma
    const isMaterialKarma1 = filterCalcLite(result.isMaterialKarma, parseInt(queryIsMaterialKarma[0]))
    const isMaterialKarma2 = filterCalcLite(result.isMaterialKarma, parseInt(queryIsMaterialKarma[1]))
    const isMaterialKarma3 = filterCalcLite(result.isMaterialKarma, parseInt(queryIsMaterialKarma[2]))
    //isCouplesSpiritualKarma
    const isCouplesSpiritualKarma1 = filterCalcLite(result.isCouplesSpiritualKarma, parseInt(queryIsCouplesSpiritualKarma[0]))
    const isCouplesSpiritualKarma2 = filterCalcLite(result.isCouplesSpiritualKarma, parseInt(queryIsCouplesSpiritualKarma[1]))
    const isCouplesSpiritualKarma3 = filterCalcLite(result.isCouplesSpiritualKarma, parseInt(queryIsCouplesSpiritualKarma[2]))
    //isGenericTasksOfPartners
    const isGenericTasksOfPartners1 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[0]))
    const isGenericTasksOfPartners2 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[1]))
    const isGenericTasksOfPartners3 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[2]))
    const isGenericTasksOfPartners4 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[3]))
    //isCouplesWellBeing
    const isCouplesWellBeing1 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[0]))
    const isCouplesWellBeing2 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[1]))
    const isCouplesWellBeing3 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[2]))
    const isCouplesWellBeing4 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[3]))
    const isCouplesWellBeing5 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[4]))
    //isThePurposeOfTheCouple
    const isThePurposeOfTheCouple1 = filterCalcLite(result.isThePurposeOfTheCouple, parseInt(queryIsThePurposeOfTheCouple[0]))
    const isThePurposeOfTheCouple2 = filterCalcLite(result.isThePurposeOfTheCouple, parseInt(queryIsThePurposeOfTheCouple[1]))
    const isThePurposeOfTheCouple3 = filterCalcLite(result.isThePurposeOfTheCouple, parseInt(queryIsThePurposeOfTheCouple[2]))
    if (req.body.id) {
        const sub = await Users.findById(req.body.id);
        if (req.body.subscribe) {
            const arr = sub.matrixSearchHistory.compatibility.filter(e => e.datePartnerOne === req.body.datePartnerOne && e.datePartnerTwo === req.body.datePartnerTwo)
            sub.matrixSearchHistory.compatibility = (sub.matrixSearchHistory.compatibility.filter(e => e.datePartnerOne === req.body.datePartnerOne && e.datePartnerTwo === req.body.datePartnerTwo)).length > 0
                ? sub.matrixSearchHistory.compatibility
                : sub.matrixSearchHistory.compatibility.concat({
                    datePartnerOne: req.body.datePartnerOne,
                    datePartnerTwo: req.body.datePartnerTwo
                });
            sub.subscription = sub.subscription.map
            (e => e.subscribe === "Пробный"
            && req.body.subscribe === "Пробный"
            && arr.length === 0
                ? {...e, compatibility: e.compatibility - 1}
                : e)
            const user = await Users.findByIdAndUpdate(req.body.id,
                {
                    $set: {
                        'matrixSearchHistory.compatibility': sub.matrixSearchHistory.compatibility
                    },
                    subscription: sub.subscription
                }, {new: true}
            )
            response = {
                isWhyDidYouMeet: isWhyDidYouMeet1.concat(isWhyDidYouMeet2, isWhyDidYouMeet3),
                isTheSpiritualEssenceOfTheCouple: isTheSpiritualEssenceOfTheCouple1.concat(isTheSpiritualEssenceOfTheCouple2, isTheSpiritualEssenceOfTheCouple3),
                isMaterialKarma: isMaterialKarma1.concat(isMaterialKarma2, isMaterialKarma3),
                isCouplesSpiritualKarma: isCouplesSpiritualKarma1.concat(isCouplesSpiritualKarma2, isCouplesSpiritualKarma3),
                isGenericTasksOfPartners: isGenericTasksOfPartners1.concat(isGenericTasksOfPartners2, isGenericTasksOfPartners3, isGenericTasksOfPartners4),
                isCouplesWellBeing: isCouplesWellBeing1.concat(isCouplesWellBeing2, isCouplesWellBeing3, isCouplesWellBeing4, isCouplesWellBeing5),
                isThePurposeOfTheCouple: isThePurposeOfTheCouple1.concat(isThePurposeOfTheCouple2, isThePurposeOfTheCouple3),
                subscription: user.subscription,
                dateRepeat: true
            }
        } else if (sub.matrixSearchHistory.compatibility.filter(e => e.datePartnerOne === req.body.datePartnerOne && e.datePartnerTwo === req.body.datePartnerTwo).length > 0) {
            response = {
                isWhyDidYouMeet: isWhyDidYouMeet1.concat(isWhyDidYouMeet2, isWhyDidYouMeet3),
                isTheSpiritualEssenceOfTheCouple: isTheSpiritualEssenceOfTheCouple1.concat(isTheSpiritualEssenceOfTheCouple2, isTheSpiritualEssenceOfTheCouple3),
                isMaterialKarma: isMaterialKarma1.concat(isMaterialKarma2, isMaterialKarma3),
                isCouplesSpiritualKarma: isCouplesSpiritualKarma1.concat(isCouplesSpiritualKarma2, isCouplesSpiritualKarma3),
                isGenericTasksOfPartners: isGenericTasksOfPartners1.concat(isGenericTasksOfPartners2, isGenericTasksOfPartners3, isGenericTasksOfPartners4),
                isCouplesWellBeing: isCouplesWellBeing1.concat(isCouplesWellBeing2, isCouplesWellBeing3, isCouplesWellBeing4, isCouplesWellBeing5),
                isThePurposeOfTheCouple: isThePurposeOfTheCouple1.concat(isThePurposeOfTheCouple2, isThePurposeOfTheCouple3),
                dateRepeat: true
            }
        } else {
            response = {
                isWhyDidYouMeet: isWhyDidYouMeet1.concat(isWhyDidYouMeet2, isWhyDidYouMeet3),
                dateRepeat: false
            }
        }
    } else {
        response = {
            isWhyDidYouMeet: isWhyDidYouMeet1.concat(isWhyDidYouMeet2, isWhyDidYouMeet3),
            dateRepeat: false
        }
    }
    res.json(response)
}


export const getMatrixHistorySearchCompatibility = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        const {matrixSearchHistory} = user._doc
        res.json({matrixSearchHistory: matrixSearchHistory.compatibility})
    } catch (err) {
        res.status(500).json({
            message: 'Нет доступа',
        })
    }
}


export const getPdfCompatibility = async (req, res) => {
    try {
        const queryDate1 = req.query.date1;
        const queryDate2 = req.query.date2;
        const queryIsWhyDidYouMeet = req.query.isWhyDidYouMeet.split(',');
        //isTheSpiritualEssenceOfTheCouple
        const queryIsTheSpiritualEssenceOfTheCouple = req.query.isTheSpiritualEssenceOfTheCouple.split(',');
        //isMaterialKarma
        const queryIsMaterialKarma = req.query.isMaterialKarma.split(',');
        //isCouplesSpiritualKarma
        const queryIsCouplesSpiritualKarma = req.query.isCouplesSpiritualKarma.split(',');
        //isGenericTasksOfPartners
        const queryIsGenericTasksOfPartners = req.query.isGenericTasksOfPartners.split(',');
        //isCouplesWellBeing
        const queryIsCouplesWellBeing = req.query.isCouplesWellBeing.split(',');
        //isThePurposeOfTheCouple
        const queryIsThePurposeOfTheCouple = req.query.isThePurposeOfTheCouple.split(',');

        const result = await MathMatrixModel.findOne({_id: "6464a3d5788b78ec34fa3ee6"})
        //isWhyDidYouMeet
        const isWhyDidYouMeet1 = filterCalcLite(result.isWhyDidYouMeet, parseInt(queryIsWhyDidYouMeet[0]))
        const isWhyDidYouMeet2 = filterCalcLite(result.isWhyDidYouMeet, parseInt(queryIsWhyDidYouMeet[1]))
        const isWhyDidYouMeet3 = filterCalcLite(result.isWhyDidYouMeet, parseInt(queryIsWhyDidYouMeet[2]))
        //isTheSpiritualEssenceOfTheCouple
        const isTheSpiritualEssenceOfTheCouple1 = filterCalcLite(result.isTheSpiritualEssenceOfTheCouple, parseInt(queryIsTheSpiritualEssenceOfTheCouple[0]))
        const isTheSpiritualEssenceOfTheCouple2 = filterCalcLite(result.isTheSpiritualEssenceOfTheCouple, parseInt(queryIsTheSpiritualEssenceOfTheCouple[1]))
        const isTheSpiritualEssenceOfTheCouple3 = filterCalcLite(result.isTheSpiritualEssenceOfTheCouple, parseInt(queryIsTheSpiritualEssenceOfTheCouple[2]))
        //isMaterialKarma
        const isMaterialKarma1 = filterCalcLite(result.isMaterialKarma, parseInt(queryIsMaterialKarma[0]))
        const isMaterialKarma2 = filterCalcLite(result.isMaterialKarma, parseInt(queryIsMaterialKarma[1]))
        const isMaterialKarma3 = filterCalcLite(result.isMaterialKarma, parseInt(queryIsMaterialKarma[2]))
        //isCouplesSpiritualKarma
        const isCouplesSpiritualKarma1 = filterCalcLite(result.isCouplesSpiritualKarma, parseInt(queryIsCouplesSpiritualKarma[0]))
        const isCouplesSpiritualKarma2 = filterCalcLite(result.isCouplesSpiritualKarma, parseInt(queryIsCouplesSpiritualKarma[1]))
        const isCouplesSpiritualKarma3 = filterCalcLite(result.isCouplesSpiritualKarma, parseInt(queryIsCouplesSpiritualKarma[2]))
        //isGenericTasksOfPartners
        const isGenericTasksOfPartners1 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[0]))
        const isGenericTasksOfPartners2 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[1]))
        const isGenericTasksOfPartners3 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[2]))
        const isGenericTasksOfPartners4 = filterCalcLite(result.isGenericTasksOfPartners, parseInt(queryIsGenericTasksOfPartners[3]))
        //isCouplesWellBeing
        const isCouplesWellBeing1 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[0]))
        const isCouplesWellBeing2 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[1]))
        const isCouplesWellBeing3 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[2]))
        const isCouplesWellBeing4 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[3]))
        const isCouplesWellBeing5 = filterCalcLite(result.isCouplesWellBeing, parseInt(queryIsCouplesWellBeing[4]))
        //isThePurposeOfTheCouple
        const isThePurposeOfTheCouple1 = filterCalcLite(result.isThePurposeOfTheCouple, parseInt(queryIsThePurposeOfTheCouple[0]))
        const isThePurposeOfTheCouple2 = filterCalcLite(result.isThePurposeOfTheCouple, parseInt(queryIsThePurposeOfTheCouple[1]))
        const isThePurposeOfTheCouple3 = filterCalcLite(result.isThePurposeOfTheCouple, parseInt(queryIsThePurposeOfTheCouple[2]))
        const generateId = uuidv4();
        function generatePDF() {
            return new Promise((resolve, reject) => {
                const doc = new PDFDocument();
                const filePath = `(${queryDate1}-${queryDate2})${generateId}`;
                const absolutePath = path.resolve(filePath);
                doc.pipe(fs.createWriteStream(absolutePath));
                const fonts = {
                    bold: './sfns-display-bold.ttf',
                    thin: './sfns-display-thin.ttf'
                };
                doc.font('./sfns-display-bold.ttf').fontSize(16).text('Расчет матрицы своместимости')
                doc.moveDown();
                doc.font('./sfns-display-bold.ttf').fontSize(16).text(`Дата рождения первого партнера: ${queryDate1.split("-").reverse().join("-")}`)
                doc.moveDown();
                doc.font('./sfns-display-bold.ttf').fontSize(16).text(`Дата рождения второго партнера: ${queryDate2.split("-").reverse().join("-")}`)
                doc.moveDown();
                const sections = [
                    {title: '1. Для чего встретились', data: [isWhyDidYouMeet1[0]?.text, isWhyDidYouMeet2[0]?.text, isWhyDidYouMeet3[0]?.text]},
                    {
                        title: '2. Духовная суть пары',
                        data: [isTheSpiritualEssenceOfTheCouple1[0]?.text, isTheSpiritualEssenceOfTheCouple2[0]?.text, isTheSpiritualEssenceOfTheCouple3[0]?.text]
                    },
                    {title: '3. Материальная карма', data: [isMaterialKarma1[0]?.text, isMaterialKarma2[0]?.text, isMaterialKarma3[0]?.text]},
                    {
                        title: '4. Духовная карма пары',
                        data: [isCouplesSpiritualKarma1[0]?.text, isCouplesSpiritualKarma2[0]?.text, isCouplesSpiritualKarma3[0]?.text]
                    },
                    {
                        title: '5. Родовые задачи партнеров',
                        data: [isGenericTasksOfPartners1[0]?.text, isGenericTasksOfPartners2[0]?.text, isGenericTasksOfPartners3[0]?.text, isGenericTasksOfPartners4[0]?.text]
                    },
                    {
                        title: '6. Благополучие пары',
                        data: [isCouplesWellBeing1[0]?.text, isCouplesWellBeing2[0]?.text, isCouplesWellBeing3[0]?.text, isCouplesWellBeing4[0]?.text, isCouplesWellBeing5[0]?.text]
                    },
                    {
                        title: '7. Предназначение пары',
                        data: [isThePurposeOfTheCouple1[0]?.text, isThePurposeOfTheCouple2[0]?.text, isThePurposeOfTheCouple3[0]?.text]
                    }
                ];
                sections.forEach((section) => {
                    doc.font(fonts.bold).fontSize(16).text(section.title);
                    doc.moveDown();
                    section.data.forEach((dataArray) => {
                        doc.font(fonts.thin).fontSize(13).text(dataArray);
                        doc.moveDown();
                    });
                    doc.moveDown();
                });
                doc.pipe(fs.createWriteStream(`(${queryDate1} - ${queryDate2})${generateId}`));
                doc.end();
                doc.on('end', () => {
                    resolve(absolutePath);
                });
                doc.on('error', (err) => {
                    reject(err);
                });
            })
        }
        const filePath = await generatePDF();
        const absolutePath = path.resolve(filePath);
        const fileStream = fs.createReadStream(absolutePath);
        fileStream.pipe(res);
        fileStream.on('end', () => {
            fs.unlink(absolutePath, (err) => {
                if (err) {
                    console.error('Ошибка при удалении файла:', err);
                } else {
                    console.log('Файл успешно удален.');
                }
            });
        });
        fileStream.on('error', (err) => {
            console.error('Ошибка при чтении файла:', err);
            res.status(500).json({
                message: 'Ошибка при чтении файла',
            });
        });
    } catch (e) {
        res.status(500).json({
            message: 'Ошибка',
        })
    }
}