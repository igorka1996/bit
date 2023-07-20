import MathMatrixModel from "../models/MathMatrix.js";
import Users from "../models/User.js";
import filterCalc from '../utils/func.js'
import filterCalcLite from '../utils/func.js'
import UserModel from "../models/User.js";
import fs from 'fs';
import PDFDocument from "pdfkit";
import {v4 as uuidv4} from 'uuid';
import * as path from "path";


export const MathMatrixCalculation = async (req, res) => {
    const queryIsProgram = req.query.isProgram.split(',');
    const queryIsPersonalQualities = req.query.isPersonalQualities.split(',');
    const queryGender = req.query.Gender;
    const queryIsTalentsOfDad = req.query.talentsOfDad.split(',');
    const queryIsTalentsOfMother = req.query.talentsOfMother.split(',');
    const queryIsTalentsOfGod = req.query.talentsOfGod.split(',');
    const queryIsPastLife = req.query.isPastLife;
    const queryIsHealthSaxasrara = req.query.IsHealthSaxasrara.split(',');
    const queryIsHealthAdjna = req.query.IsHealthAdjna.split(',');
    const queryIsHealthVishydha = req.query.IsHealthVishydha.split(',');
    const queryIsHealthAnaxata = req.query.IsHealthAnaxata.split(',');
    const queryIsHealthManipura = req.query.IsHealthManipura.split(',');
    const queryIsHealthMuladxara = req.query.IsHealthMuladxara.split(',');
    const queryIsHealthSvadxistana = req.query.IsHealthSvadxistana.split(',');
    const queryIsPurpose = req.query.IsPurpose.split(',');
    const queryIsPersonalPowerCode = req.query.isPersonalPowerCode.split(',');
    const queryIsLove = req.query.isLove.split(',');
    const queryIsMoney = req.query.isMoney.split(',');
    const queryIsMoneySuccess = req.query.moneySuccess.split(',');
    const queryIsMoneyFlow = req.query.MoneyFlow.split(',');
    const queryParentMenLine = req.query.parentMenLine.split(',');
    const queryParentWomenLine = req.query.parentWomenLine.split(',');
    const queryParentResentment = req.query.parentResentment.split(',');
    const queryIsChildren = req.query.isChildren.split(',');
    const queryIsManagement = req.query.isManagement.split(',');
    const result = await MathMatrixModel.findById("645a5724fd9798b3dd8c0000")
    const filterCalcProgram = () => {
        return result.isProgram.filter(e => queryIsProgram.includes(e.value));
    }
    const isProgramArr = filterCalcProgram()
    // isPersonalQualities/isGeneral
    const isGeneral = filterCalc(result.isPersonalQualities.isGeneral, parseInt(queryIsPersonalQualities[2]), queryGender)
    //isPersonalQualities/isPositive
    const isPositive1 = filterCalc(result.isPersonalQualities.isPositive, parseInt(queryIsPersonalQualities[0]), queryGender)
    const isPositive2 = filterCalc(result.isPersonalQualities.isPositive, parseInt(queryIsPersonalQualities[1]), queryGender)
    //isPersonalQualities/isNegative

    const isNegative1 = filterCalc(result.isPersonalQualities.isNegative, parseInt(queryIsPersonalQualities[0]), queryGender)
    const isNegative2 = filterCalc(result.isPersonalQualities.isNegative, parseInt(queryIsPersonalQualities[1]), queryGender)
    //isTalentsOfDad
    const talentsOfDad1 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfDad[0]), queryGender)
    const talentsOfDad2 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfDad[1]), queryGender)
    const talentsOfDad3 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfDad[2]), queryGender)
    //isTalentsOfMother
    const talentsOfMother1 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfMother[0]), queryGender)
    const talentsOfMother2 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfMother[1]), queryGender)
    const talentsOfMother3 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfMother[2]), queryGender)
    //isTalentsOfGod
    const talentsOfGod1 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfGod[0]), queryGender)
    const talentsOfGod2 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfGod[1]), queryGender)
    const talentsOfGod3 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfGod[2]), queryGender)
    //isPastLife
    const pastLife = filterCalcLite(result.isPastLife, queryIsPastLife)
    //isHealth/Saxasrara
    const Saxasrara1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSaxasrara[0]))
    const Saxasrara2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSaxasrara[1]))
    const Saxasrara3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSaxasrara[2]))
    //isHealth/Adjna
    const Adjna1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAdjna[0]))
    const Adjna2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAdjna[1]))
    const Adjna3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAdjna[2]))
    //isHealth/Vishydha
    const Vishydha1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthVishydha[0]))
    const Vishydha2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthVishydha[1]))
    const Vishydha3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthVishydha[2]))
    //isHealth/Anaxata
    const Anaxata1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAnaxata[0]))
    const Anaxata2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAnaxata[1]))
    const Anaxata3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAnaxata[2]))
    //isHealth/Manipura
    const Manipura1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthManipura[0]))
    const Manipura2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthManipura[1]))
    const Manipura3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthManipura[2]))
    //isHealth/Svadxistana
    const Svadxistana1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSvadxistana[0]))
    const Svadxistana2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSvadxistana[1]))
    const Svadxistana3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSvadxistana[2]))
    //isHealth/Muladxara
    const Muladxara1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthMuladxara[0]))
    const Muladxara2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthMuladxara[1]))
    const Muladxara3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthMuladxara[2]))
    //IsPurpose
    const Purpose20_40 = filterCalc(result.isPurpose.isPurpose20_40, parseInt(queryIsPurpose[0]), queryGender)
    const Purpose40_60 = filterCalc(result.isPurpose.isPurpose40_60, parseInt(queryIsPurpose[1]), queryGender)
    const GeneralPurpose = filterCalc(result.isPurpose.isGeneralPurpose, parseInt(queryIsPurpose[2]), queryGender)
    //isPersonalPowerCode
    const isPersonalPowerCode = filterCalc(result.isPersonalPowerCode, parseInt(queryIsPersonalPowerCode[0]), queryGender)
    const isPersonalPowerCode1 = filterCalc(result.isPersonalPowerCode, parseInt(queryIsPersonalPowerCode[1]), queryGender)
    const isPersonalPowerCode2 = filterCalc(result.isPersonalPowerCode, parseInt(queryIsPersonalPowerCode[2]), queryGender)

    //isLove
    const loveMenOrWomen1 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMen, parseInt(queryIsLove[0])) : filterCalcLite(result.isLove.loveWomen, parseInt(queryIsLove[0]))
    const loveMenOrWomen2 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMen, parseInt(queryIsLove[1])) : filterCalcLite(result.isLove.loveWomen, parseInt(queryIsLove[1]))
    const characterLoveMenOrWomen1 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMenCharacter, parseInt(queryIsLove[0])) : filterCalcLite(result.isLove.loveWomenCharacter, parseInt(queryIsLove[0]))
    const characterLoveMenOrWomen2 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMenCharacter, parseInt(queryIsLove[1])) : filterCalcLite(result.isLove.loveWomenCharacter, parseInt(queryIsLove[1]))
    const totalLove = filterCalc(result.isLove.loveTotal, parseInt(queryIsLove[2]), queryGender)
    //isMoney
    const MoneyActivity = filterCalc(result.isMoney.moneyLineOfActivity, parseInt(queryIsMoney[0]), queryGender)
    const MoneySuccess1 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[0]), queryGender)
    const MoneySuccess2 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[1]), queryGender)
    const MoneySuccess3 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[2]), queryGender)
    const MoneySuccess4 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[3]), queryGender)
    const MoneyFlow1 = filterCalc(result.isMoney.MoneyFlow, parseInt(queryIsMoneyFlow[0]), queryGender)
    const MoneyFlow2 = filterCalc(result.isMoney.MoneyFlow, parseInt(queryIsMoneyFlow[1]), queryGender)
    //isParents/parentMenLine
    const ParentMenLine1 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[0]), queryGender)
    const ParentMenLine2 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[1]), queryGender)
    const ParentMenLine3 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[2]), queryGender)
    const ParentMenLine4 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[3]), queryGender)
    const ParentMenLine5 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[4]), queryGender)
    const ParentMenLine6 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[5]), queryGender)
    const ParentMenLine7 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[6]), queryGender)
    //isParents/parentWomenLine
    const ParentWomenLine1 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[0]), queryGender)
    const ParentWomenLine2 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[1]), queryGender)
    const ParentWomenLine3 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[2]), queryGender)
    const ParentWomenLine4 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[3]), queryGender)
    const ParentWomenLine5 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[4]), queryGender)
    const ParentWomenLine6 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[5]), queryGender)
    const ParentWomenLine7 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[6]), queryGender)
    //isParents/parentResentment
    const ParentResentment1 = filterCalc(result.isParents.parentResentment, parseInt(queryParentResentment[0]), queryGender)
    const ParentResentment2 = filterCalc(result.isParents.parentResentment, parseInt(queryParentResentment[1]), queryGender)
    const ParentResentment3 = filterCalc(result.isParents.parentResentment, parseInt(queryParentResentment[2]), queryGender)
    //isChildren
    const IsChildren1 = filterCalc(result.isChildren, parseInt(queryIsChildren[0]), queryGender)
    const IsChildren2 = filterCalc(result.isChildren, parseInt(queryIsChildren[1]), queryGender)
    const IsChildren3 = filterCalc(result.isChildren, parseInt(queryIsChildren[2]), queryGender)
    //isManagement
    const IsManagement1 = filterCalc(result.isManagement, parseInt(queryIsManagement[0]), queryGender)
    const IsManagement2 = filterCalc(result.isManagement, parseInt(queryIsManagement[1]), queryGender)
    const IsManagement3 = filterCalc(result.isManagement, parseInt(queryIsManagement[2]), queryGender)
    //isYear
    const isYear = result.isYear
    let response;
    if (req.body.id) {
        const sub = await Users.findById(req.body.id);
        if (req.body.subscribe) {
            const arr = sub.matrixSearchHistory.personal.filter(e => e.date === req.body.date && e.gender === queryGender)
            sub.matrixSearchHistory.personal = (sub.matrixSearchHistory.personal.filter(e => e.date === req.body.date && e.gender === queryGender)).length > 0
                ? sub.matrixSearchHistory.personal
                : sub.matrixSearchHistory.personal.concat({
                    gender: queryGender,
                    date: req.body.date,
                    name: req.body.name
                });
            sub.subscription = sub.subscription.map
            (e => e.subscribe === "Пробный"
            && req.body.subscribe === "Пробный"
            && arr.length === 0
                ? {...e, personal: e.personal - 1}
                : e)
            const user = await Users.findByIdAndUpdate(req.body.id,
                {
                    $set: {
                        'matrixSearchHistory.personal': sub.matrixSearchHistory.personal
                    },
                    subscription: sub.subscription
                }, {new: true}
            )
            response = {
                isPersonalQualities: {
                    isGeneral: isGeneral,
                    isPositive: isPositive1.concat(isPositive2),
                    isNegative: isNegative1.concat(isNegative2),
                },
                isTalents: {
                    isTalentsOfDad: talentsOfDad1.concat(talentsOfDad2, talentsOfDad3),
                    isTalentsOfMother: talentsOfMother1.concat(talentsOfMother2, talentsOfMother3),
                    isTalentsOfGod: talentsOfGod1.concat(talentsOfGod2, talentsOfGod3)
                },
                isPastLife: pastLife,
                isHealth: {
                    Saxasrara: Saxasrara1.concat(Saxasrara2, Saxasrara3),
                    Adjna: Adjna1.concat(Adjna2, Adjna3),
                    Vishydha: Vishydha1.concat(Vishydha2, Vishydha3),
                    Anaxata: Anaxata1.concat(Anaxata2, Anaxata3),
                    Manipura: Manipura1.concat(Manipura2, Manipura3),
                    Muladxara: Muladxara1.concat(Muladxara2, Muladxara3),
                    Svadxistana: Svadxistana1.concat(Svadxistana2, Svadxistana3)
                },
                isPurpose: {
                    isPurpose20_40: Purpose20_40,
                    isPurpose40_60: Purpose40_60,
                    isGeneralPurpose: GeneralPurpose
                },
                isPersonalPowerCode: isPersonalPowerCode1.concat(isPersonalPowerCode, isPersonalPowerCode2),
                isLove: {
                    isLoveMenOrWomen: loveMenOrWomen1.concat(loveMenOrWomen2),
                    isCharacterLoveMenOrWomen: characterLoveMenOrWomen1.concat(characterLoveMenOrWomen2),
                    loveTotal: totalLove
                },
                isMoney: {
                    moneyLineOfActivity: MoneyActivity,
                    moneySuccess: MoneySuccess1.concat(MoneySuccess2, MoneySuccess3, MoneySuccess4),
                    moneyFlow: MoneyFlow1.concat(MoneyFlow2)
                },
                isParents: {
                    parentMenLine: ParentMenLine1.concat(ParentMenLine2, ParentMenLine3, ParentMenLine4, ParentMenLine5, ParentMenLine6, ParentMenLine7),
                    parentWomenLine: ParentWomenLine1.concat(ParentWomenLine2, ParentWomenLine3, ParentWomenLine4, ParentWomenLine5, ParentWomenLine6, ParentWomenLine7),
                    parentResentment: ParentResentment1.concat(ParentResentment2, ParentResentment3)
                },
                isChildren: IsChildren1.concat(IsChildren2, IsChildren3),
                isManagement: IsManagement1.concat(IsManagement2, IsManagement3),
                isYear: isYear,
                isProgram: isProgramArr,
                subscription: user.subscription,
                dateRepeat: true
            }
        } else if (sub.matrixSearchHistory.personal.filter(e => e.date === req.body.date && e.gender === queryGender).length > 0) {
            response = {
                isPersonalQualities: {
                    isGeneral: isGeneral,
                    isPositive: isPositive1.concat(isPositive2),
                    isNegative: isNegative1.concat(isNegative2),
                },
                isTalents: {
                    isTalentsOfDad: talentsOfDad1.concat(talentsOfDad2, talentsOfDad3),
                    isTalentsOfMother: talentsOfMother1.concat(talentsOfMother2, talentsOfMother3),
                    isTalentsOfGod: talentsOfGod1.concat(talentsOfGod2, talentsOfGod3)
                },
                isPastLife: pastLife,
                isHealth: {
                    Saxasrara: Saxasrara1.concat(Saxasrara2, Saxasrara3),
                    Adjna: Adjna1.concat(Adjna2, Adjna3),
                    Vishydha: Vishydha1.concat(Vishydha2, Vishydha3),
                    Anaxata: Anaxata1.concat(Anaxata2, Anaxata3),
                    Manipura: Manipura1.concat(Manipura2, Manipura3),
                    Muladxara: Muladxara1.concat(Muladxara2, Muladxara3),
                    Svadxistana: Svadxistana1.concat(Svadxistana2, Svadxistana3)
                },
                isPurpose: {
                    isPurpose20_40: Purpose20_40,
                    isPurpose40_60: Purpose40_60,
                    isGeneralPurpose: GeneralPurpose
                },
                isPersonalPowerCode: isPersonalPowerCode1.concat(isPersonalPowerCode, isPersonalPowerCode2),
                isLove: {
                    isLoveMenOrWomen: loveMenOrWomen1.concat(loveMenOrWomen2),
                    isCharacterLoveMenOrWomen: characterLoveMenOrWomen1.concat(characterLoveMenOrWomen2),
                    loveTotal: totalLove
                },
                isMoney: {
                    moneyLineOfActivity: MoneyActivity,
                    moneySuccess: MoneySuccess1.concat(MoneySuccess2, MoneySuccess3, MoneySuccess4),
                    moneyFlow: MoneyFlow1.concat(MoneyFlow2)
                },
                isParents: {
                    parentMenLine: ParentMenLine1.concat(ParentMenLine2, ParentMenLine3, ParentMenLine4, ParentMenLine5, ParentMenLine6, ParentMenLine7),
                    parentWomenLine: ParentWomenLine1.concat(ParentWomenLine2, ParentWomenLine3, ParentWomenLine4, ParentWomenLine5, ParentWomenLine6, ParentWomenLine7),
                    parentResentment: ParentResentment1.concat(ParentResentment2, ParentResentment3)
                },
                isChildren: IsChildren1.concat(IsChildren2, IsChildren3),
                isManagement: IsManagement1.concat(IsManagement2, IsManagement3),
                isYear: isYear,
                isProgram: isProgramArr,
                dateRepeat: true
            }
        } else {
            response = {
                isPersonalQualities: {
                    isGeneral: isGeneral,
                    isPositive: isPositive1.concat(isPositive2),
                    isNegative: isNegative1.concat(isNegative2),
                },
                isYear: isYear,
                dateRepeat: false
            }
        }
    } else {
        response = {
            isPersonalQualities: {
                isGeneral: isGeneral,
                isPositive: isPositive1.concat(isPositive2),
                isNegative: isNegative1.concat(isNegative2),
            },
            isYear: isYear,
            dateRepeat: false
        }
    }
    res.json(response)
}


export const getMatrixHistorySearchPersonal = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        const {matrixSearchHistory} = user._doc
        res.json({matrixSearchHistory: matrixSearchHistory.personal})
    } catch (err) {
        res.status(500).json({
            message: 'Нет доступа',
        })
    }
}

export const getPdfPersonal = async (req, res) => {
    try {
        const {
            Gender,
            isPersonalQualities,
            talentsOfDad,
            talentsOfMother,
            talentsOfGod,
            isPastLife,
            IsHealthSaxasrara,
            IsHealthAdjna,
            IsHealthVishydha,
            IsHealthAnaxata,
            IsHealthManipura,
            IsHealthMuladxara,
            IsHealthSvadxistana,
            IsPurpose,
            isPersonalPowerCode,
            isLove,
            isMoney,
            moneySuccess,
            MoneyFlow,
            parentMenLine,
            parentWomenLine,
            parentResentment,
            isChildren,
            isManagement,
            date,
            name,
            yearRange,
            Year,
            isProgram
        } = req.query
        const queryIsProgram = isProgram.split(',');
        const queryIsPersonalQualities = isPersonalQualities.split(',');
        const queryGender = Gender;
        const queryIsTalentsOfDad = talentsOfDad.split(',');
        const queryIsTalentsOfMother = talentsOfMother.split(',');
        const queryIsTalentsOfGod = talentsOfGod.split(',');
        const queryIsPastLife = isPastLife;
        const queryIsHealthSaxasrara = IsHealthSaxasrara.split(',');
        const queryIsHealthAdjna = IsHealthAdjna.split(',');
        const queryIsHealthVishydha = IsHealthVishydha.split(',');
        const queryIsHealthAnaxata = IsHealthAnaxata.split(',');
        const queryIsHealthManipura = IsHealthManipura.split(',');
        const queryIsHealthMuladxara = IsHealthMuladxara.split(',');
        const queryIsHealthSvadxistana = IsHealthSvadxistana.split(',');
        const queryIsPurpose = IsPurpose.split(',');
        const queryIsPersonalPowerCode = isPersonalPowerCode.split(',');
        const queryIsLove = isLove.split(',');
        const queryIsMoney = isMoney.split(',');
        const queryIsMoneySuccess = moneySuccess.split(',');
        const queryIsMoneyFlow = MoneyFlow.split(',');
        const queryParentMenLine = parentMenLine.split(',');
        const queryParentWomenLine = parentWomenLine.split(',');
        const queryParentResentment = parentResentment.split(',');
        const queryIsChildren = isChildren.split(',');
        const queryIsManagement = isManagement.split(',');
        const queryDate = date;
        const queryName = name;
        const queryYearRange = yearRange
        const queryYear = Year.split(',')
        const result = await MathMatrixModel.findById("645a5724fd9798b3dd8c0000")
        const filterCalcProgram = () => {
            return result.isProgram.filter(e => queryIsProgram.includes(e.value));
        }
        const isProgramArr = filterCalcProgram()
        //isPersonalQualities/isGeneral
        const isGeneral = filterCalc(result.isPersonalQualities.isGeneral, parseInt(queryIsPersonalQualities[2]), queryGender)
        //isPersonalQualities/isPositive
        const isPositive1 = filterCalc(result.isPersonalQualities.isPositive, parseInt(queryIsPersonalQualities[0]), queryGender)
        const isPositive2 = filterCalc(result.isPersonalQualities.isPositive, parseInt(queryIsPersonalQualities[1]), queryGender)
        //isPersonalQualities/isNegative
        const isNegative1 = filterCalc(result.isPersonalQualities.isNegative, parseInt(queryIsPersonalQualities[0]), queryGender)
        const isNegative2 = filterCalc(result.isPersonalQualities.isNegative, parseInt(queryIsPersonalQualities[1]), queryGender)
        //isTalentsOfDad
        const talentsOfDad1 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfDad[0]), queryGender)
        const talentsOfDad2 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfDad[1]), queryGender)
        const talentsOfDad3 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfDad[2]), queryGender)
        //isTalentsOfMother
        const talentsOfMother1 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfMother[0]), queryGender)
        const talentsOfMother2 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfMother[1]), queryGender)
        const talentsOfMother3 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfMother[2]), queryGender)
        //isTalentsOfGod
        const talentsOfGod1 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfGod[0]), queryGender)
        const talentsOfGod2 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfGod[1]), queryGender)
        const talentsOfGod3 = filterCalc(result.isTalents, parseInt(queryIsTalentsOfGod[2]), queryGender)
        //isPastLife
        const pastLife = filterCalcLite(result.isPastLife, queryIsPastLife)
        //isHealth/Saxasrara
        const Saxasrara1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSaxasrara[0]))
        const Saxasrara2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSaxasrara[1]))
        const Saxasrara3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSaxasrara[2]))
        //isHealth/Adjna
        const Adjna1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAdjna[0]))
        const Adjna2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAdjna[1]))
        const Adjna3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAdjna[2]))
        //isHealth/Vishydha
        const Vishydha1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthVishydha[0]))
        const Vishydha2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthVishydha[1]))
        const Vishydha3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthVishydha[2]))
        //isHealth/Anaxata
        const Anaxata1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAnaxata[0]))
        const Anaxata2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAnaxata[1]))
        const Anaxata3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthAnaxata[2]))
        //isHealth/Manipura
        const Manipura1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthManipura[0]))
        const Manipura2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthManipura[1]))
        const Manipura3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthManipura[2]))
        //isHealth/Svadxistana
        const Svadxistana1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSvadxistana[0]))
        const Svadxistana2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSvadxistana[1]))
        const Svadxistana3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthSvadxistana[2]))
        //isHealth/Muladxara
        const Muladxara1 = filterCalcLite(result.isHealth, parseInt(queryIsHealthMuladxara[0]))
        const Muladxara2 = filterCalcLite(result.isHealth, parseInt(queryIsHealthMuladxara[1]))
        const Muladxara3 = filterCalcLite(result.isHealth, parseInt(queryIsHealthMuladxara[2]))
        //IsPurpose
        const Purpose20_40 = filterCalc(result.isPurpose.isPurpose20_40, parseInt(queryIsPurpose[0]), queryGender)
        const Purpose40_60 = filterCalc(result.isPurpose.isPurpose40_60, parseInt(queryIsPurpose[1]), queryGender)
        const GeneralPurpose = filterCalc(result.isPurpose.isGeneralPurpose, parseInt(queryIsPurpose[2]), queryGender)
        //isPersonalPowerCode
        const isPersonalPowerCode1 = filterCalc(result.isPersonalPowerCode, parseInt(queryIsPersonalPowerCode[0]), queryGender)
        const isPersonalPowerCode2 = filterCalc(result.isPersonalPowerCode, parseInt(queryIsPersonalPowerCode[1]), queryGender)
        const isPersonalPowerCode3 = filterCalc(result.isPersonalPowerCode, parseInt(queryIsPersonalPowerCode[2]), queryGender)
        //isLove
        const loveMenOrWomen1 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMen, parseInt(queryIsLove[0])) : filterCalcLite(result.isLove.loveWomen, parseInt(queryIsLove[0]))
        const loveMenOrWomen2 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMen, parseInt(queryIsLove[1])) : filterCalcLite(result.isLove.loveWomen, parseInt(queryIsLove[1]))
        const characterLoveMenOrWomen1 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMenCharacter, parseInt(queryIsLove[0])) : filterCalcLite(result.isLove.loveWomenCharacter, parseInt(queryIsLove[0]))
        const characterLoveMenOrWomen2 = queryGender === 'M' ? filterCalcLite(result.isLove.loveMenCharacter, parseInt(queryIsLove[1])) : filterCalcLite(result.isLove.loveWomenCharacter, parseInt(queryIsLove[1]))
        const totalLove = filterCalc(result.isLove.loveTotal, parseInt(queryIsLove[2]), queryGender)
        //isMoney
        const MoneyActivity = filterCalc(result.isMoney.moneyLineOfActivity, parseInt(queryIsMoney[0]), queryGender)
        const MoneySuccess1 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[0]), queryGender)
        const MoneySuccess2 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[1]), queryGender)
        const MoneySuccess3 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[2]), queryGender)
        const MoneySuccess4 = filterCalc(result.isMoney.moneySuccess, parseInt(queryIsMoneySuccess[3]), queryGender)
        const MoneyFlow1 = filterCalc(result.isMoney.MoneyFlow, parseInt(queryIsMoneyFlow[0]), queryGender)
        const MoneyFlow2 = filterCalc(result.isMoney.MoneyFlow, parseInt(queryIsMoneyFlow[1]), queryGender)
        //isParents/parentMenLine
        const ParentMenLine1 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[0]), queryGender)
        const ParentMenLine2 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[1]), queryGender)
        const ParentMenLine3 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[2]), queryGender)
        const ParentMenLine4 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[3]), queryGender)
        const ParentMenLine5 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[4]), queryGender)
        const ParentMenLine6 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[5]), queryGender)
        const ParentMenLine7 = filterCalc(result.isParents.parentMenLine, parseInt(queryParentMenLine[6]), queryGender)
        //isParents/parentWomenLine
        const ParentWomenLine1 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[0]), queryGender)
        const ParentWomenLine2 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[1]), queryGender)
        const ParentWomenLine3 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[2]), queryGender)
        const ParentWomenLine4 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[3]), queryGender)
        const ParentWomenLine5 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[4]), queryGender)
        const ParentWomenLine6 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[5]), queryGender)
        const ParentWomenLine7 = filterCalc(result.isParents.parentWomenLine, parseInt(queryParentWomenLine[6]), queryGender)
        //isParents/parentResentment
        const ParentResentment1 = filterCalc(result.isParents.parentResentment, parseInt(queryParentResentment[0]), queryGender)
        const ParentResentment2 = filterCalc(result.isParents.parentResentment, parseInt(queryParentResentment[1]), queryGender)
        const ParentResentment3 = filterCalc(result.isParents.parentResentment, parseInt(queryParentResentment[2]), queryGender)
        //isChildren
        const IsChildren1 = filterCalc(result.isChildren, parseInt(queryIsChildren[0]), queryGender)
        const IsChildren2 = filterCalc(result.isChildren, parseInt(queryIsChildren[1]), queryGender)
        const IsChildren3 = filterCalc(result.isChildren, parseInt(queryIsChildren[2]), queryGender)
        //isManagement
        const IsManagement1 = filterCalc(result.isManagement, parseInt(queryIsManagement[0]), queryGender)
        const IsManagement2 = filterCalc(result.isManagement, parseInt(queryIsManagement[1]), queryGender)
        const IsManagement3 = filterCalc(result.isManagement, parseInt(queryIsManagement[2]), queryGender)
        //Year
        const year1 = filterCalc(result.isYear, parseInt(queryYear[0]), queryGender)
        const year2 = filterCalc(result.isYear, parseInt(queryYear[1]), queryGender)
        const year3 = filterCalc(result.isYear, parseInt(queryYear[2]), queryGender)
        const generateId = uuidv4();
        const generatePDF = () => {
            return new Promise((resolve, reject) => {
                const doc = new PDFDocument();
                const filePath = `${queryName}(${queryDate})${generateId}`;
                const absolutePath = path.resolve(filePath);
                doc.pipe(fs.createWriteStream(absolutePath));
                const fonts = {
                    bold: './sfns-display-bold.ttf',
                    thin: './sfns-display-thin.ttf'
                };
                doc.font('./sfns-display-bold.ttf').fontSize(16).text('Персональный расчет матрицы')
                doc.moveDown();
                doc.font('./sfns-display-bold.ttf').fontSize(16).text(`Имя: ${queryName}`)
                doc.moveDown();
                doc.font('./sfns-display-bold.ttf').fontSize(16).text(`Дата рождения: ${queryDate.split("-").reverse().join("-")}`)
                doc.moveDown();
                const sections = [
                    {
                        title: '1. Личные качества',
                        subSections: [
                            {title: 'Общее', data: [isGeneral[0]?.text]},
                            {title: 'В позитиве', data: [isPositive1[0]?.text, isPositive2[0]?.text]},
                            {title: 'В негативе', data: [isNegative1[0]?.text, isNegative2[0]?.text]}
                        ]
                    },
                    {
                        title: '2. Таланты',
                        subSections: [
                            {
                                title: 'Талант от Бога',
                                data: [talentsOfGod1[0]?.text, talentsOfGod2[0]?.text, talentsOfGod3[0]?.text]
                            },
                            {
                                title: 'Талант от Отца',
                                data: [talentsOfDad1[0]?.text, talentsOfDad2[0]?.text, talentsOfDad3[0]?.text]
                            },
                            {
                                title: 'Талант от Матери',
                                data: [talentsOfMother1[0]?.text, talentsOfMother2[0]?.text, talentsOfMother3[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '3. Прошлая жизнь',
                        subSections: [{title: '', data: [pastLife[0]?.text]}]
                    },
                    {
                        title: '4. Здоровье',
                        subSections: [
                            {title: 'Сахасрара - отвечают за головной мозг, волосы, верхняя часть черепа.', data: ['']},
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['Заболевания могут быть как косметического характера (проблемы с волосами), так и более серьезного уровня - проблемы со здоровьем в черепном отделе, нарушения функций мозга и так далее. В быту вы ведете себя хаотично, много беспокойства. Не понимаете отдельных вещей и постоянно требуете строгой конкретики.']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Жить полноценной жизнью вам мешают материальные привязки. Вы разочаровались в своих духовных идеалах и стали жестким прагматиком. Верите только себе и рассчитываете только на себя. К окружающим нередко проявляете злость и нетерпение, пытаетесь поучать и воспитывать в духе своих убеждений. Можете навязывать свое мнение и не принимаете позицию собеседника. Вы не видите своего пути и глобальной миссии, поэтому все силы направляете на достижение исключительного материального благополучия. При этом испытываете проблемы, отсутствие энергии, так как мыслите узко и не готовы принимать помощь от судьбы.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Придется постигнуть высшие законы вселенной, разобраться в своем жизненном пути и предназначении. Так же хорошо помогать в этом другим людям со сходными проблемами. Определитесь со своей главной миссией и следуйте ей. Важно не просто зарабатывать ради своего комфорта и процветания, а выполнять работу, которая поможет и другим людям, будет служить важной идее. Относитесь к проблемам в жизни проще, воспринимая их как полезный опыт. Хорошо жить в режиме, питаться, заниматься физическими упражнениями, работой и отдыхать регулярно. Составьте график и следуйте ему. Полезно вести довольно строгий и умеренный образ жизни, не предаваться излишествам, заниматься энергетическими и духовными практиками.']
                            },
                            {title: '', data: [Saxasrara1[0]?.text, Saxasrara2[0]?.text, Saxasrara3[0]?.text]},
                            {
                                title: 'Аджна - отвечают за затылочные и височные доли мозга, глаз, уши, нос, лицо, верхняя челюсть, зубы верхней челюсти, зрительный нерв, кора головного мозга.',
                                data: ['']
                            },
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['В вашей ситуации встречаются заболевания глаз, ушей, частые проблемы с зубами. Потеря здоровья может быть связана с затылочной областью или проблемами в зоне лица. В более широком плане это выражается в проблемах при общении, отсутствии друзей, недостатке логики, постоянных протестах против систем, в которых находитесь (работа, семья, страна).']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Вы живете собственными иллюзиями и сильно оторваны от реальности. Часто настолько отдаетесь выражению протеста против внешнего мира, что забываете о работе и семейных обязанностях. У вас не хватает времени часто даже на самое необходимое. При этом вы рассуждаете и мечтаете о глобальных вещах, которые не в силах поменять. Свою же жизнь не принимаете и не можете выстроить будущее, заняться своей судьбой. Живете как живется, словно плывете по течению. При этом вас тревожит ощущение существования не своей жизнью (в профессии, месте жительства, в личных отношениях). Вы словно раздвоены, так как ваш внутренний мир не соответствует внешним ценностям. Отсюда неустроенность жизни, разлад между глубинными желаниями (которые боитесь даже постигнуть) и навязанными стереотипами общества. Могут возникнуть проблемы с психическим состоянием.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Вам нужно расширить свой кругозор и принимать информацию из разных источников. Помогайте благоустройству общества, работайте со своим внутренним “я” и глубинным сознанием. Важно найти свое предназначение в жизни, свой особый энергетический поток и следовать ему. Возможно, придется полностью сменить систему ценностей, отказаться от иллюзий, за которые держались раньше. Не бойтесь остаться наедине с собой для глубокого постижения своей миссии в жизни. Осознайте свою роль, откажитесь от вредных привычек, научитесь грамотно распределять время и деньги. Самодисциплина станет важным шагом к переустройству жизни. Не забывайте о постоянном развитии своей личности.']
                            },
                            {title: '', data: [Adjna1[0]?.text, Adjna2[0]?.text, Adjna3[0]?.text]},
                            {
                                title: 'Вишудха - отвечают за щитовидная железа, трахея, бронхи, горло, голосовые связки, плечи, руки, седьмой шейный позвонок, все шейные позвонки, нижняя челюсть, зубы нижней челюсти.',
                                data: ['']
                            },
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['Часто повторяются заболевания горла, могут возникнуть проблемы с щитовидкой, нижней челюстью. Нередко болят плечи или руки. На бытовом уровне вы не говорите правду, лжете себе и другим, возможно неумение выражать мысли, некоммуникабельность или наоборот - постоянное перебивание собеседника.']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Вы боитесь говорить правду, даже ту информацию и знания, в которых уверены, пережили на собственном опыте. Делиться хочется и одновременно страшно, потому что последствия могут быть в будущем. Вы ведете себя шаблонно и так же мыслите, не готовы проявлять свое творческое начало, уникальную личность. Боитесь осуждения и неодобрения, а отсюда проблемы в общении, замкнутость, заниженная самооценка, неумение выражать себя и говорить в буквальном смысле (глотание слов, сбивчивый голос). Вы стараетесь следовать всем понятным догмам, имеете множество распространенных в обществе предрассудков, боитесь отличаться от других. При этом много фантазируете и говорите неправду, а отсюда сразу начинаются проблемы со здоровьем. Лжете не только другим, но даже себе.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Нужно пересмотреть и проанализировать опыт прошлого. Передать всю его ценность и постигнутые вами истины людям в любой словесной, устной форме. Вам важно начать говорить, это может быть видео ролик на ютубе, песня в караоке, первый в жизни тост в большой компании. Высказывайтесь на собраниях и на работе при принятии коллективных решений, просто пойте в ванной, рассказывайте что-то в кругу друзей. Но обязательно начинать проговаривать свои мысли, опыт и мнение. Говорите правду и избегайте лжи в любой форме. Для успеха используйте подсказки жизни и больше прислушивайтесь к себе. Занимайтесь творческим самовыражением.']
                            },
                            {title: '', data: [Vishydha1[0]?.text, Vishydha2[0]?.text, Vishydha3[0]?.text]},
                            {
                                title: 'Анахата - отвечают за сердце, кровеносная система, органы дыхания, легкие, бронхи, грудной отдел позвоночника, рёбра, лопаточная зона спины, грудь.',
                                data: ['']
                            },
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['Проблемы обычно наблюдаются с сердцем, легкими, бронхами. Возможны травмы ребер и все заболевания, связанные с областью грудной клетки. Это проявляется и на бытовом уровне: вам словно что-то мешает расправить грудь и дышать в полную силу. Много планов, но нет энергии на их реализацию.']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Вы находитесь в глубочайшей депрессии и словно полностью обесточены. Нет сил двигаться вперед, все время обращаетесь к какому-то случаю в прошлом. Нередко испытываете чувство вины и раскаяния. Вы хотите словно застраховаться от неприятностей, но не знаете как. Поэтому страшно идти дальше, реализовывать свои идеи, помогать другим создавать лучшее будущее. В то же время и внутри вы недостаточно испытываете любви к окружающим, словно ничем не наполнены. Настоящее вас не радует, непонятно, как дальше жить и выходить из состояния глубокого физического и душевного упадка. Это может выражаться как в полном равнодушии и желании, чтобы вас все оставили в покое, так и в излишней жертвенности по отношению к другим. Вы много отдаете, но ничего не получаете взамен, энергия тратится впустую, вы не чувствуете удовлетворения. Порой сами ждете чудесной помощи извне, решения ваших проблем.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Единомышленниками или психологом. Пусть это будет своеобразная исповедь, раскрытие своих плохих поступков и черт характера, за которые вам стыдно. Вы можете таким образом даже самостоятельно создавать группы для обмена знаниями и опытом в построении счастливых, гармоничных отношений. Вам необходимо построить для себя новую картину мира, научиться верить и любить взаимно и счастливо. Учитесь чему-то новому и всегда имейте пространство комфорта, где можно быть собой и просто расслабиться с близкими. Проанализируйте свое окружение и общайтесь с истинными друзьями, не тратя время на пустые контакты. Будьте настоящим, старайтесь выражать свои эмоции открыто. Переведите фокус со своих проблем на общие задачи своего круга общения. Научитесь принимать людей и себя со всеми светлыми и темными сторонами. Так в нужный момент вы сможете собраться и стать самодостаточным, без обвинений себя и окружающих, без зависимости от чужого одобрения или помощи.']
                            },
                            {title: '', data: [Anaxata1[0]?.text, Anaxata2[0]?.text, Anaxata3[0]?.text]},
                            {
                                title: 'Манипура - отвечают за ЖКТ, органы брюшной полости, поджелудочная железа, селезёнка, печень, желчный пузырь, тонкий кишечник, центральная часть позвоночника.',
                                data: ['']
                            },
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['Заболевания могут быть в области желудочно-кишечного тракта. Нередко поражается средняя часть позвоночника. На поведенческом уровне это выражается в агрессии, раздражительности, неадекватности. Равнодушие может резко переходить в злобу и требовательность. Вы теряете что-то важное и делаете все, чтобы удержать это, в том числе незаконными методами, нарушая все нормы морали и права.']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Вы испытываете слишком сильную привязанность в отношении к человеку, либо вещам, обстоятельствам, образу жизни. При этом сами наделяете их исключительными, ценными для себя свойствами. Для вас важно контролировать и обладать. Вы часто высокомерны и амбициозны, любите показывать свою парадную сторону жизни и гордиться успехами. Ради результата не видите недостойных средств. В то же время можете быть безответственны. С людьми ниже вас по социальной лестнице, зависимыми (например, подчиненные на работе) не контактируете совсем. В какой-то момент жизнь начинает отнимать самое важное, чтобы вы начали действовать, развиваться, выходить из привычной зоны комфорта. Но вместо этого вы жалуетесь или проявляете агрессию. Не хотите меняться и хватаетесь за то, что у вас отбирают, любыми путями. Придется столкнуться с собой внутренним и понять, что не все зависит от вас и подвластно вашему влиянию. Как только сможете отпустить это - угроза потери минует.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Определите новые границы жизни, уберите прежние рамки, вы должны развиваться. Переоцените окружение и принимайте мир таким, как он есть, без гордости и высокомерия. Совершайте спонтанные поступки и избавляйтесь от собственных комплексов. Сделайте что-то несвойственное кардинальная смена имиджа). Начните выстраивать отношения с разными людьми, а не только с теми, кто вам выгоден. Неплохо начать заниматься благотворительностью. Дисциплинируйте себя и развивайте волю через спорт, правильное питание, соблюдение режима. Так вы сможете освободиться от рамок и собственного недовольства, разочарования, агрессии. Станьте хозяином своего тела и эмоций.']
                            },
                            {title: '', data: [Manipura1[0]?.text, Manipura2[0]?.text, Manipura3[0]?.text]},
                            {
                                title: 'Свадхистана - отвечают за надпочечники, матка и яичники, почки, кишечник, предстательная железа у мужчин, поясничный район позвоночного столба.',
                                data: ['']
                            },
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['В физическом плане можно страдать от заболевания таких органов, как почки, печень, толстый кишечник, половая сфера, надпочечники, поясничный отдел. На бытовом уровне это отражается в чувстве постоянной вины, ощущения нехватки любви, раздражительности, отсутствии радости от о всего. Вы можете ответственности или чрезмерно искать выгоду во всем при недостатке плодов от вашей деятельности. Не повышают зарплату, нет заказов, вы начинаете экономить и выгадывать, впадаете в еще большую депрессию.']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Часто все идет из детства, когда родители недостаточно уделяли внимания, где- то недооценили, недолюбили. Когда во взрослой жизни сталкиваетесь с подобной ситуацией, внутри просыпается тот обиженный ребенок. И вы моментально ставите себе блок, отказываетесь от дальнейших действий. Вслед за этим возникает чувство вины, что не выполнили обязательства, поступили неправильно. И так повторяется много раз вплоть до серьезного крушения в жизни (как потеря работы). У вас нет сил для творчества, создания каких-то плодов деятельности. Не заводите детей, ведь внутренне еще сами довольно инфантильны и не дали достаточно ребенку в себе. Нет энергии, сил и знаний откуда взять вдохновение для жизненного толчка.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Примите своих родителей и полюбите в себе того недолюбленного ребенка. Позвольте себе жить как хочется, реализуйте свои желания одно за другим. Найдите единомышленников, заведите друзей, с которыми можно проговаривать и решать свои эмоциональные проблемы. Откажитесь от крайностей - чрезмерного шопоголизма или фанатичного накопления ценностей. Избавьтесь от внутреннего стыда перед собой и близкими. Позвольте реализоваться себе творчески. Ищите источник энергии для себя в приятных вещах. Это может быть массаж, организация мероприятий, забота о внешности, любой вид отдыха. Важно найти любимое занятие и работать в комфортной зоне, где сможете максимально раскрыться.']
                            },
                            {title: '', data: [Svadxistana1[0]?.text, Svadxistana2[0]?.text, Svadxistana3[0]?.text]},
                            {
                                title: 'Муладхара - отвечают за Мочеполовая система, нижние конечности, толстый кишечник, копчик, крестец, ноги.',
                                data: ['']
                            },
                            {
                                title: 'Проблемы со здоровьем: ',
                                data: ['На физическом плане начинаются проблемы с ногами, мочеполовой системой, областью крестца. В жизненном плане материальным голодом, крушением жизни, постоянной нехваткой брошенности и неоцененности. Вы испытываете усталость и чувство безнадежности ситуации.']
                            },
                            {
                                title: 'Причины: ',
                                data: ['Вы слишком зациклены на прошлом, живете в нем, постоянно возвращаетесь туда воспоминаниями. Здесь возможно два варианта. Когда-то было очень хорошо - благополучие, счастье, достаток. А сейчас - плохо, и вы не можете принять ситуацию, живете воспоминаниями о прошлом. Или наоборот - в прошлом было несколько повторяющихся ситуаций с проблемами, неудачами, предательством. Вы не можете этого забыть и двигаться вперед. Постоянно крутитесь как белка в колесе, но ничего не меняется. От этого усталость, страх на грани выживания, вы экономите на всем и постоянно себя сдерживаете. Хочется просто уже отказаться от движения, так как нет энергии и результата. Ждете “волшебной палочки”, которая решит все за вас.']
                            },
                            {
                                title: 'Решение проблемы: ',
                                data: ['Пересмотрите свои ценности и отношение к прошлому. Умейте видеть хорошее в настоящем. Даже в самом неудачном прошлом тоже найдите позитивные примеры и уроки. Нужно быть готовым к переменам. Сделайте для себя настоящее более ценным, чем прошлое. Все проблемы не навсегда, жизнь течет, а ситуации меняются. Будьте готовы поймать благоприятный момент. Полезно заняться чем-то увлекательным и интересным, пусть даже вначале не приносящим больших денег. Освободитесь от прошлого и на элементарном, бытовом уровне. По возможности, сделайте ремонт или поменяйте часть обстановки, уберите старые фото и вещи.']
                            },
                            {title: '', data: [Muladxara1[0]?.text, Muladxara2[0]?.text, Muladxara3[0]?.text]},
                        ]
                    },
                    {
                        title: '5. Предназначение',
                        subSections: [
                            {title: 'Предназначение (20-40 лет)', data: [Purpose20_40[0]?.text]},
                            {title: 'Предназначение (40-60 лет)', data: [Purpose40_60[0]?.text]},
                            {title: 'Предназначение (общее)', data: [GeneralPurpose[0]?.text]}
                        ]
                    },
                    {
                        title: '6. Код личной силы',
                        subSections: [
                            {
                                title: '',
                                data: [isPersonalPowerCode1[0]?.text, isPersonalPowerCode2[0]?.text, isPersonalPowerCode3[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '7. Отношения и любовь',
                        subSections: [
                            {
                                title: `Отношения у ${queryGender === 'M' ? 'мужчин' : 'женщин'}`,
                                data: [loveMenOrWomen1[0]?.text, loveMenOrWomen2[0]?.text]
                            },
                            {
                                title: 'Характер партнёра',
                                data: [characterLoveMenOrWomen1[0]?.text, characterLoveMenOrWomen2[0]?.text]
                            },
                            {title: 'На выходе', data: [totalLove[0]?.text]}
                        ]
                    },
                    {
                        title: '8. Деньги',
                        subSections: [
                            {title: 'Направление деятельности', data: [MoneyActivity[0]?.text]},
                            {
                                title: 'Для достижения успеха важно',
                                data: [MoneySuccess1[0]?.text, MoneySuccess2[0]?.text, MoneySuccess3[0]?.text, MoneySuccess4[0]?.text]
                            },
                            {title: 'Как раскрыть денежный поток', data: [MoneyFlow1[0]?.text, MoneyFlow2[0]?.text]}
                        ]
                    },
                    {
                        title: '9. Родители',
                        subSections: [
                            {
                                title: 'Родовые программы по мужской линии',
                                data: [ParentMenLine1[0]?.text, ParentMenLine2[0]?.text, ParentMenLine3[0]?.text, ParentMenLine4[0]?.text, ParentMenLine5[0]?.text, ParentMenLine6[0]?.text, ParentMenLine7[0]?.text]
                            },
                            {
                                title: 'Родовые программы по женской линии',
                                data: [ParentWomenLine1[0]?.text, ParentWomenLine2[0]?.text, ParentWomenLine3[0]?.text, ParentWomenLine4[0]?.text, ParentWomenLine5[0]?.text, ParentWomenLine6[0]?.text, ParentWomenLine7[0]?.text]
                            },
                            {
                                title: 'Обиды на родителей',
                                data: [ParentResentment1[0]?.text, ParentResentment2[0]?.text, ParentResentment3[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '10. Дети',
                        subSections: [
                            {title: '', data: [IsChildren1[0]?.text, IsChildren2[0]?.text, IsChildren3[0]?.text]}
                        ]
                    },
                    {
                        title: '11. Руководство',
                        subSections: [
                            {title: '', data: [IsManagement1[0]?.text, IsManagement2[0]?.text, IsManagement3[0]?.text]}
                        ]
                    },
                    {
                        title: '12. Программы',
                        subSections: isProgramArr.map(e => ({title: e.title, data: e.text ? [e.text] : ['1']}))
                    },
                    {
                        title: `13. Прогноз на год (${queryYearRange})`,
                        subSections: [
                            {title: '', data: [year1[0]?.text, year2[0]?.text, year3[0]?.text]}
                        ]
                    },
                ];
                sections.forEach((section) => {
                    doc.font(fonts.bold).fontSize(16).text(section.title);
                    doc.moveDown();
                    section.subSections.forEach((subSection) => {
                        doc.font(fonts.bold).fontSize(14).text(subSection.title);
                        doc.moveDown();
                        subSection.data.forEach((dataArray) => {
                            doc.font(fonts.thin).fontSize(13).text(dataArray);
                            doc.moveDown();
                        });
                        doc.moveDown();
                    });
                    doc.moveDown();
                });
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
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Ошибка',
        })
    }
}