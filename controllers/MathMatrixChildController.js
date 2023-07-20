import MathMatrixModel from "../models/MathMatrixChild.js";
import filterCalc from "../utils/func.js"
import filterCalcLite from "../utils/func.js"
import Users from "../models/User.js";
import UserModel from "../models/User.js";
import fs from "fs";
import PDFDocument from "pdfkit";
import {v4 as uuidv4} from "uuid";
import path from "path";


export const MathMatrixChildCalculation = async (req, res) => {
    let response;
    //isPersonalQualities
    const queryIsPersonalQualitiesChildren = req.query.isPersonalQualitiesChildren.split(',');
    //isChildTalents
    const queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups = req.query.isBirthTalents.split(',');
    const queryIsTalentsInTheFemaleLine = req.query.isTalentsInTheFemaleLine.split(',');
    const queryIsTalentsInTheMaleLine = req.query.isTalentsInTheMaleLine.split(',');
    //isRelationshipWithParents
    const queryIsWhatToConsiderWhenRaisingAChild = req.query.isWhatToConsiderWhenRaisingAChild.split(',');
    const queryIsLessonsOnTheGenderOfTheMaleLine = req.query.isLessonsOnTheGenderOfTheMaleLine.split(',');
    const queryIsLessonsOnTheGenderOfTheFemaleLine = req.query.isLessonsOnTheGenderOfTheFemaleLine.split(',');
    //isSelfRrealizationOfTheChild
    const queryIsDirectionOfActivityOptionsForFutureProfessions = req.query.isDirectionOfActivityOptionsForFutureProfessions.split(',');
    const queryIsForSuccessItIsImportant = req.query.isForSuccessItIsImportant.split(',');
    //isPurposeOfTheChild
    const queryIsFirstPersonalPurpose = req.query.isFirstPersonalPurpose;
    const queryIsSecondSocialPurpose = req.query.isSecondSocialPurpose;
    //isSubconsciousScript
    const queryIsSubconsciousScript = req.query.isSubconsciousScript.split(',');
    //Gender
    const queryGender = req.query.Gender;


    const result = await MathMatrixModel.findOne({_id: "645e94256b8a7f8eeb6d8f08"})
    // isPersonalQualities/isChildInCommunication
    const isChildInCommunication = filterCalc(result.isPersonalQualitiesChildren.isChildInCommunication, parseInt(queryIsPersonalQualitiesChildren[2]), queryGender)
    //isPersonalQualities/isCharacteristicsOfQualities
    const isCharacteristicsOfQualities1 = filterCalc(result.isPersonalQualitiesChildren.isCharacteristicsOfQualities, parseInt(queryIsPersonalQualitiesChildren[0]), queryGender)
    const isCharacteristicsOfQualities2 = filterCalc(result.isPersonalQualitiesChildren.isCharacteristicsOfQualities, parseInt(queryIsPersonalQualitiesChildren[1]), queryGender)
    //isPersonalQualities/isRecommendationsForParents
    const isRecommendationsForParents1 = filterCalc(result.isPersonalQualitiesChildren.isRecommendationsForParents, parseInt(queryIsPersonalQualitiesChildren[0]), queryGender)
    const isRecommendationsForParents2 = filterCalc(result.isPersonalQualitiesChildren.isRecommendationsForParents, parseInt(queryIsPersonalQualitiesChildren[1]), queryGender)
    //isChildTalents/isBirthTalents
    const isBirthTalents1 = filterCalc(result.isChildTalents, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[0]), queryGender)
    const isBirthTalents2 = filterCalc(result.isChildTalents, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[1]), queryGender)
    const isBirthTalents3 = filterCalc(result.isChildTalents, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[2]), queryGender)
    //isChildTalents/isTalentsInTheFemaleLine
    const isTalentsInTheFemaleLine1 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheFemaleLine[0]), queryGender)
    const isTalentsInTheFemaleLine2 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheFemaleLine[1]), queryGender)
    const isTalentsInTheFemaleLine3 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheFemaleLine[2]), queryGender)
    //isChildTalents/isTalentsInTheMaleLine
    const isTalentsInTheMaleLine1 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheMaleLine[0]), queryGender)
    const isTalentsInTheMaleLine2 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheMaleLine[1]), queryGender)
    const isTalentsInTheMaleLine3 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheMaleLine[2]), queryGender)
    //isChildTalents/isDirectionsOfHobbiesAndHobbyGroups
    const isDirectionsOfHobbiesAndHobbyGroups1 = filterCalc(result.isDirectionsOfHobbiesAndHobbyGroups, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[0]), queryGender)
    const isDirectionsOfHobbiesAndHobbyGroups2 = filterCalc(result.isDirectionsOfHobbiesAndHobbyGroups, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[1]), queryGender)
    const isDirectionsOfHobbiesAndHobbyGroups3 = filterCalc(result.isDirectionsOfHobbiesAndHobbyGroups, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[2]), queryGender)
    //isRelationshipWithParents/isWhatToConsiderWhenRaisingAChild
    const isWhatToConsiderWhenRaisingAChild1 = filterCalcLite(result.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild, parseInt(queryIsWhatToConsiderWhenRaisingAChild[0]))
    const isWhatToConsiderWhenRaisingAChild2 = filterCalcLite(result.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild, parseInt(queryIsWhatToConsiderWhenRaisingAChild[1]))
    const isWhatToConsiderWhenRaisingAChild3 = filterCalcLite(result.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild, parseInt(queryIsWhatToConsiderWhenRaisingAChild[2]))
    //isRelationshipWithParents/isLessonsOnTheGenderOfTheMaleLine
    const isLessonsOnTheGenderOfTheMaleLine1 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[0]))
    const isLessonsOnTheGenderOfTheMaleLine2 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[1]))
    const isLessonsOnTheGenderOfTheMaleLine3 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[2]))
    const isLessonsOnTheGenderOfTheMaleLine4 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[3]))
    const isLessonsOnTheGenderOfTheMaleLine5 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[4]))
    const isLessonsOnTheGenderOfTheMaleLine6 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[5]))
    const isLessonsOnTheGenderOfTheMaleLine7 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[6]))
    //isRelationshipWithParents/isLessonsOnTheGenderOfTheFemaleLine
    const isLessonsOnTheGenderOfTheFemaleLine1 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[0]))
    const isLessonsOnTheGenderOfTheFemaleLine2 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[1]))
    const isLessonsOnTheGenderOfTheFemaleLine3 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[2]))
    const isLessonsOnTheGenderOfTheFemaleLine4 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[3]))
    const isLessonsOnTheGenderOfTheFemaleLine5 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[4]))
    const isLessonsOnTheGenderOfTheFemaleLine6 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[5]))
    const isLessonsOnTheGenderOfTheFemaleLine7 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[6]))
    //isSelfRrealizationOfTheChild/isDirectionOfActivityOptionsForFutureProfessions
    const isDirectionOfActivityOptionsForFutureProfessions1 = filterCalc(result.isSelfRrealizationOfTheChild.isDirectionOfActivityOptionsForFutureProfessions, parseInt(queryIsDirectionOfActivityOptionsForFutureProfessions[0]), queryGender)
    //isSelfRrealizationOfTheChild/isForSuccessItIsImportant
    const isForSuccessItIsImportant1 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[0]), queryGender)
    const isForSuccessItIsImportant2 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[1]), queryGender)
    const isForSuccessItIsImportant3 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[2]), queryGender)
    const isForSuccessItIsImportant4 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[3]), queryGender)
    //isPurposeOfTheChild/isFirstPersonalPurpose
    const isFirstPersonalPurpose1 = filterCalc(result.isPurposeOfTheChild.isFirstPersonalPurpose, parseInt(queryIsFirstPersonalPurpose), queryGender)
    //isPurposeOfTheChild/isSecondSocialPurpose
    const isSecondSocialPurpose1 = filterCalc(result.isPurposeOfTheChild.isSecondSocialPurpose, parseInt(queryIsSecondSocialPurpose), queryGender)
    //isSubconsciousScript
    const isSubconsciousScript1 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[0]), queryGender)
    const isSubconsciousScript2 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[1]), queryGender)
    const isSubconsciousScript3 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[2]), queryGender)
    const isSubconsciousScript4 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[3]), queryGender)
    //isYear
    const isYear = result.isYear


    if (req.body.id) {
        const sub = await Users.findById(req.body.id);
        if (req.body.subscribe) {
            const arr = sub.matrixSearchHistory.children.filter(e => e.date === req.body.date && e.gender === queryGender)
            sub.matrixSearchHistory.children = (sub.matrixSearchHistory.personal.filter(e => e.date === req.body.date && e.gender === queryGender)).length > 0
                ? sub.matrixSearchHistory.children
                : sub.matrixSearchHistory.children.concat({
                    gender: queryGender,
                    date: req.body.date,
                    name: req.body.name
                });
            sub.subscription = sub.subscription.map
            (e => e.subscribe === "Пробный"
            && req.body.subscribe === "Пробный"
            && arr.length === 0
                ? {...e, children: e.children - 1}
                : e)
            const user = await Users.findByIdAndUpdate(req.body.id,
                {
                    $set: {
                        'matrixSearchHistory.children': sub.matrixSearchHistory.children
                    },
                    subscription: sub.subscription
                }, {new: true}
            )
            response = {
                //OK
                isPersonalQualitiesChildren: {
                    isChildInCommunication: isChildInCommunication,
                    isCharacteristicsOfQualities: isCharacteristicsOfQualities1.concat(isCharacteristicsOfQualities2),
                    isRecommendationsForParents: isRecommendationsForParents1.concat(isRecommendationsForParents2),
                },
                //OK
                isChildTalents: {
                    isBirthTalents: isBirthTalents1.concat(isBirthTalents2, isBirthTalents3),
                    isTalentsInTheFemaleLine: isTalentsInTheFemaleLine1.concat(isTalentsInTheFemaleLine2, isTalentsInTheFemaleLine3),
                    isTalentsInTheMaleLine: isTalentsInTheMaleLine1.concat(isTalentsInTheMaleLine2, isTalentsInTheMaleLine3),
                    isDirectionsOfHobbiesAndHobbyGroups: isDirectionsOfHobbiesAndHobbyGroups1.concat(isDirectionsOfHobbiesAndHobbyGroups2, isDirectionsOfHobbiesAndHobbyGroups3)
                },
                //OK
                isRelationshipWithParents: {
                    isWhatToConsiderWhenRaisingAChild: isWhatToConsiderWhenRaisingAChild1.concat(isWhatToConsiderWhenRaisingAChild2, isWhatToConsiderWhenRaisingAChild3),
                    isLessonsOnTheGenderOfTheMaleLine: isLessonsOnTheGenderOfTheMaleLine1.concat(isLessonsOnTheGenderOfTheMaleLine2, isLessonsOnTheGenderOfTheMaleLine3, isLessonsOnTheGenderOfTheMaleLine4, isLessonsOnTheGenderOfTheMaleLine5, isLessonsOnTheGenderOfTheMaleLine6, isLessonsOnTheGenderOfTheMaleLine7),
                    isLessonsOnTheGenderOfTheFemaleLine: isLessonsOnTheGenderOfTheFemaleLine1.concat(isLessonsOnTheGenderOfTheFemaleLine2, isLessonsOnTheGenderOfTheFemaleLine3, isLessonsOnTheGenderOfTheFemaleLine4, isLessonsOnTheGenderOfTheFemaleLine5, isLessonsOnTheGenderOfTheFemaleLine6, isLessonsOnTheGenderOfTheFemaleLine7)
                },
                //OK
                isSelfRrealizationOfTheChild: {
                    isDirectionOfActivityOptionsForFutureProfessions: isDirectionOfActivityOptionsForFutureProfessions1,
                    isForSuccessItIsImportant: isForSuccessItIsImportant1.concat(isForSuccessItIsImportant2, isForSuccessItIsImportant3, isForSuccessItIsImportant4),
                },
                //OK
                isPurposeOfTheChild: {
                    isFirstPersonalPurpose: isFirstPersonalPurpose1,
                    isSecondSocialPurpose: isSecondSocialPurpose1,
                },
                //OK
                isSubconsciousScript: isSubconsciousScript1.concat(isSubconsciousScript2, isSubconsciousScript3, isSubconsciousScript4),
                //OK
                isYear: isYear,
                subscription: user.subscription,
                dateRepeat: true
            }
        } else if (sub.matrixSearchHistory.children.filter(e => e.date === req.body.date && e.gender === queryGender).length > 0) {
            response = {
                isPersonalQualitiesChildren: {
                    isChildInCommunication: isChildInCommunication,
                    isCharacteristicsOfQualities: isCharacteristicsOfQualities1.concat(isCharacteristicsOfQualities2),
                    isRecommendationsForParents: isRecommendationsForParents1.concat(isRecommendationsForParents2),
                },
                //OK
                isChildTalents: {
                    isBirthTalents: isBirthTalents1.concat(isBirthTalents2, isBirthTalents3),
                    isTalentsInTheFemaleLine: isTalentsInTheFemaleLine1.concat(isTalentsInTheFemaleLine2, isTalentsInTheFemaleLine3),
                    isTalentsInTheMaleLine: isTalentsInTheMaleLine1.concat(isTalentsInTheMaleLine2, isTalentsInTheMaleLine3),
                    isDirectionsOfHobbiesAndHobbyGroups: isDirectionsOfHobbiesAndHobbyGroups1.concat(isDirectionsOfHobbiesAndHobbyGroups2, isDirectionsOfHobbiesAndHobbyGroups3)
                },
                //OK
                isRelationshipWithParents: {
                    isWhatToConsiderWhenRaisingAChild: isWhatToConsiderWhenRaisingAChild1.concat(isWhatToConsiderWhenRaisingAChild2, isWhatToConsiderWhenRaisingAChild3),
                    isLessonsOnTheGenderOfTheMaleLine: isLessonsOnTheGenderOfTheMaleLine1.concat(isLessonsOnTheGenderOfTheMaleLine2, isLessonsOnTheGenderOfTheMaleLine3, isLessonsOnTheGenderOfTheMaleLine4, isLessonsOnTheGenderOfTheMaleLine5, isLessonsOnTheGenderOfTheMaleLine6, isLessonsOnTheGenderOfTheMaleLine7),
                    isLessonsOnTheGenderOfTheFemaleLine: isLessonsOnTheGenderOfTheFemaleLine1.concat(isLessonsOnTheGenderOfTheFemaleLine2, isLessonsOnTheGenderOfTheFemaleLine3, isLessonsOnTheGenderOfTheFemaleLine4, isLessonsOnTheGenderOfTheFemaleLine5, isLessonsOnTheGenderOfTheFemaleLine6, isLessonsOnTheGenderOfTheFemaleLine7)
                },
                //OK
                isSelfRrealizationOfTheChild: {
                    isDirectionOfActivityOptionsForFutureProfessions: isDirectionOfActivityOptionsForFutureProfessions1,
                    isForSuccessItIsImportant: isForSuccessItIsImportant1.concat(isForSuccessItIsImportant2, isForSuccessItIsImportant3, isForSuccessItIsImportant4),
                },
                //OK
                isPurposeOfTheChild: {
                    isFirstPersonalPurpose: isFirstPersonalPurpose1,
                    isSecondSocialPurpose: isSecondSocialPurpose1,
                },
                //OK
                isSubconsciousScript: isSubconsciousScript1.concat(isSubconsciousScript2, isSubconsciousScript3, isSubconsciousScript4),
                //OK
                isYear: isYear,
                dateRepeat: true
            }
        } else {
            response = {
                isPersonalQualitiesChildren: {
                    isChildInCommunication: isChildInCommunication,
                    isCharacteristicsOfQualities: isCharacteristicsOfQualities1.concat(isCharacteristicsOfQualities2),
                    isRecommendationsForParents: isRecommendationsForParents1.concat(isRecommendationsForParents2),
                },
                isYear: isYear,
                dateRepeat: false
            }
        }
    } else {
        response = {
            isPersonalQualitiesChildren: {
                isChildInCommunication: isChildInCommunication,
                isCharacteristicsOfQualities: isCharacteristicsOfQualities1.concat(isCharacteristicsOfQualities2),
                isRecommendationsForParents: isRecommendationsForParents1.concat(isRecommendationsForParents2),
            },
            isYear: isYear,
            dateRepeat: false
        }
    }
    res.json(response)
}


export const getMatrixHistorySearchChildren = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        const {matrixSearchHistory} = user._doc
        res.json({matrixSearchHistory: matrixSearchHistory.children})
    } catch (err) {
        res.status(500).json({
            message: 'Нет доступа',
        })
    }
}


export const getPdfChildren = async (req, res) => {
    try {
        const queryDate = req.query.date;
        const queryName = req.query.name;
        //isPersonalQualities
        const queryIsPersonalQualitiesChildren = req.query.isPersonalQualitiesChildren.split(',');
        //isChildTalents
        const queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups = req.query.isBirthTalents.split(',');
        const queryIsTalentsInTheFemaleLine = req.query.isTalentsInTheFemaleLine.split(',');
        const queryIsTalentsInTheMaleLine = req.query.isTalentsInTheMaleLine.split(',');
        //isRelationshipWithParents
        const queryIsWhatToConsiderWhenRaisingAChild = req.query.isWhatToConsiderWhenRaisingAChild.split(',');
        const queryIsLessonsOnTheGenderOfTheMaleLine = req.query.isLessonsOnTheGenderOfTheMaleLine.split(',');
        const queryIsLessonsOnTheGenderOfTheFemaleLine = req.query.isLessonsOnTheGenderOfTheFemaleLine.split(',');
        //isSelfRrealizationOfTheChild
        const queryIsDirectionOfActivityOptionsForFutureProfessions = req.query.isDirectionOfActivityOptionsForFutureProfessions.split(',');
        const queryIsForSuccessItIsImportant = req.query.isForSuccessItIsImportant.split(',');
        //isPurposeOfTheChild
        const queryIsFirstPersonalPurpose = req.query.isFirstPersonalPurpose;
        const queryIsSecondSocialPurpose = req.query.isSecondSocialPurpose;
        //isSubconsciousScript
        const queryIsSubconsciousScript = req.query.isSubconsciousScript.split(',');
        //Gender
        const queryGender = req.query.Gender;
        const queryYearRange = req.query.yearRange
        const queryYear = req.query.Year.split(',')

        const result = await MathMatrixModel.findOne({_id: "645e94256b8a7f8eeb6d8f08"})
        // isPersonalQualities/isChildInCommunication
        const isChildInCommunication = filterCalc(result.isPersonalQualitiesChildren.isChildInCommunication, parseInt(queryIsPersonalQualitiesChildren[2]), queryGender)
        //isPersonalQualities/isCharacteristicsOfQualities
        const isCharacteristicsOfQualities1 = filterCalc(result.isPersonalQualitiesChildren.isCharacteristicsOfQualities, parseInt(queryIsPersonalQualitiesChildren[0]), queryGender)
        const isCharacteristicsOfQualities2 = filterCalc(result.isPersonalQualitiesChildren.isCharacteristicsOfQualities, parseInt(queryIsPersonalQualitiesChildren[1]), queryGender)
        //isPersonalQualities/isRecommendationsForParents
        const isRecommendationsForParents1 = filterCalc(result.isPersonalQualitiesChildren.isRecommendationsForParents, parseInt(queryIsPersonalQualitiesChildren[0]), queryGender)
        const isRecommendationsForParents2 = filterCalc(result.isPersonalQualitiesChildren.isRecommendationsForParents, parseInt(queryIsPersonalQualitiesChildren[1]), queryGender)
        //isChildTalents/isBirthTalents
        const isBirthTalents1 = filterCalc(result.isChildTalents, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[0]), queryGender)
        const isBirthTalents2 = filterCalc(result.isChildTalents, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[1]), queryGender)
        const isBirthTalents3 = filterCalc(result.isChildTalents, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[2]), queryGender)
        //isChildTalents/isTalentsInTheFemaleLine
        const isTalentsInTheFemaleLine1 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheFemaleLine[0]), queryGender)
        const isTalentsInTheFemaleLine2 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheFemaleLine[1]), queryGender)
        const isTalentsInTheFemaleLine3 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheFemaleLine[2]), queryGender)
        //isChildTalents/isTalentsInTheMaleLine
        const isTalentsInTheMaleLine1 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheMaleLine[0]), queryGender)
        const isTalentsInTheMaleLine2 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheMaleLine[1]), queryGender)
        const isTalentsInTheMaleLine3 = filterCalc(result.isChildTalents, parseInt(queryIsTalentsInTheMaleLine[2]), queryGender)
        //isChildTalents/isDirectionsOfHobbiesAndHobbyGroups
        const isDirectionsOfHobbiesAndHobbyGroups1 = filterCalc(result.isDirectionsOfHobbiesAndHobbyGroups, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[0]), queryGender)
        const isDirectionsOfHobbiesAndHobbyGroups2 = filterCalc(result.isDirectionsOfHobbiesAndHobbyGroups, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[1]), queryGender)
        const isDirectionsOfHobbiesAndHobbyGroups3 = filterCalc(result.isDirectionsOfHobbiesAndHobbyGroups, parseInt(queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups[2]), queryGender)
        //isRelationshipWithParents/isWhatToConsiderWhenRaisingAChild
        const isWhatToConsiderWhenRaisingAChild1 = filterCalcLite(result.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild, parseInt(queryIsWhatToConsiderWhenRaisingAChild[0]))
        const isWhatToConsiderWhenRaisingAChild2 = filterCalcLite(result.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild, parseInt(queryIsWhatToConsiderWhenRaisingAChild[1]))
        const isWhatToConsiderWhenRaisingAChild3 = filterCalcLite(result.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild, parseInt(queryIsWhatToConsiderWhenRaisingAChild[2]))
        //isRelationshipWithParents/isLessonsOnTheGenderOfTheMaleLine
        const isLessonsOnTheGenderOfTheMaleLine1 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[0]))
        const isLessonsOnTheGenderOfTheMaleLine2 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[1]))
        const isLessonsOnTheGenderOfTheMaleLine3 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[2]))
        const isLessonsOnTheGenderOfTheMaleLine4 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[3]))
        const isLessonsOnTheGenderOfTheMaleLine5 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[4]))
        const isLessonsOnTheGenderOfTheMaleLine6 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[5]))
        const isLessonsOnTheGenderOfTheMaleLine7 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine, parseInt(queryIsLessonsOnTheGenderOfTheMaleLine[6]))
        //isRelationshipWithParents/isLessonsOnTheGenderOfTheFemaleLine
        const isLessonsOnTheGenderOfTheFemaleLine1 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[0]))
        const isLessonsOnTheGenderOfTheFemaleLine2 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[1]))
        const isLessonsOnTheGenderOfTheFemaleLine3 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[2]))
        const isLessonsOnTheGenderOfTheFemaleLine4 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[3]))
        const isLessonsOnTheGenderOfTheFemaleLine5 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[4]))
        const isLessonsOnTheGenderOfTheFemaleLine6 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[5]))
        const isLessonsOnTheGenderOfTheFemaleLine7 = filterCalcLite(result.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine, parseInt(queryIsLessonsOnTheGenderOfTheFemaleLine[6]))
        //isSelfRrealizationOfTheChild/isDirectionOfActivityOptionsForFutureProfessions
        const isDirectionOfActivityOptionsForFutureProfessions1 = filterCalc(result.isSelfRrealizationOfTheChild.isDirectionOfActivityOptionsForFutureProfessions, parseInt(queryIsDirectionOfActivityOptionsForFutureProfessions[0]), queryGender)
        //isSelfRrealizationOfTheChild/isForSuccessItIsImportant
        const isForSuccessItIsImportant1 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[0]), queryGender)
        const isForSuccessItIsImportant2 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[1]), queryGender)
        const isForSuccessItIsImportant3 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[2]), queryGender)
        const isForSuccessItIsImportant4 = filterCalc(result.isSelfRrealizationOfTheChild.isForSuccessItIsImportant, parseInt(queryIsForSuccessItIsImportant[3]), queryGender)
        //isPurposeOfTheChild/isFirstPersonalPurpose
        const isFirstPersonalPurpose1 = filterCalc(result.isPurposeOfTheChild.isFirstPersonalPurpose, parseInt(queryIsFirstPersonalPurpose), queryGender)
        //isPurposeOfTheChild/isSecondSocialPurpose
        const isSecondSocialPurpose1 = filterCalc(result.isPurposeOfTheChild.isSecondSocialPurpose, parseInt(queryIsSecondSocialPurpose), queryGender)
        //isSubconsciousScript
        const isSubconsciousScript1 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[0]), queryGender)
        const isSubconsciousScript2 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[1]), queryGender)
        const isSubconsciousScript3 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[2]), queryGender)
        const isSubconsciousScript4 = filterCalc(result.isSubconsciousScript, parseInt(queryIsSubconsciousScript[3]), queryGender)
        //Year
        const year1 = filterCalc(result.isYear, parseInt(queryYear[0]), queryGender)
        const year2 = filterCalc(result.isYear, parseInt(queryYear[1]), queryGender)
        const year3 = filterCalc(result.isYear, parseInt(queryYear[2]), queryGender)
        const generateId = uuidv4();

        function generatePDF() {
            return new Promise((resolve, reject) => {
                const doc = new PDFDocument();
                const filePath = `${queryName}(${queryDate})${generateId}`;
                const absolutePath = path.resolve(filePath);
                doc.pipe(fs.createWriteStream(absolutePath));
                const fonts = {
                    bold: './sfns-display-bold.ttf',
                    thin: './sfns-display-thin.ttf'
                };
                doc.font('./sfns-display-bold.ttf').fontSize(16).text('Расчет детской матрицы')
                doc.moveDown();
                doc.font('./sfns-display-bold.ttf').fontSize(16).text(`Имя: ${queryName}`)
                doc.moveDown();
                doc.font('./sfns-display-bold.ttf').fontSize(16).text(`Дата рождения: ${queryDate.split("-").reverse().join("-")}`)
                doc.moveDown();
                const sections = [
                    {
                        title: '1. Личные качества',
                        subSections: [
                            {
                                title: 'Характеристика качеств',
                                data: [isCharacteristicsOfQualities1[0]?.text, isCharacteristicsOfQualities2[0]?.text]
                            },
                            {
                                title: 'Рекомендации для родителей',
                                data: [isRecommendationsForParents1[0]?.text, isRecommendationsForParents2[0]?.text]
                            },
                            {title: 'Ребенок в общении', data: [isChildInCommunication[0]?.text]}
                        ]
                    },
                    {
                        title: '2. Таланты ребенка',
                        subSections: [
                            {
                                title: 'Талант от рождения',
                                data: [isBirthTalents1[0]?.text, isBirthTalents2[0]?.text, isBirthTalents3[0]?.text]
                            },
                            {
                                title: 'Таланты по мужской линии',
                                data: [isTalentsInTheMaleLine1[0]?.text, isTalentsInTheMaleLine2[0]?.text, isTalentsInTheMaleLine3[0]?.text]
                            },
                            {
                                title: 'Таланты по женской линии',
                                data: [isTalentsInTheFemaleLine1[0]?.text, isTalentsInTheFemaleLine2[0]?.text, isTalentsInTheFemaleLine3[0]?.text]
                            },
                            {
                                title: 'Направления увлечений, хобби и кружков по интересам',
                                data: [isDirectionsOfHobbiesAndHobbyGroups1[0]?.text, isDirectionsOfHobbiesAndHobbyGroups2[0]?.text, isDirectionsOfHobbiesAndHobbyGroups3[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '3. Отношения с родителями',
                        subSections: [
                            {
                                title: 'Что нужно учитывать в вопросах воспитания ребенка',
                                data: [isWhatToConsiderWhenRaisingAChild1[0]?.text, isWhatToConsiderWhenRaisingAChild2[0]?.text, isWhatToConsiderWhenRaisingAChild3[0]?.text]
                            },
                            {
                                title: 'Уроки по роду мужской линии',
                                data: [isLessonsOnTheGenderOfTheMaleLine1[0]?.text, isLessonsOnTheGenderOfTheMaleLine2[0]?.text, isLessonsOnTheGenderOfTheMaleLine3[0]?.text, isLessonsOnTheGenderOfTheMaleLine4[0]?.text, isLessonsOnTheGenderOfTheMaleLine5[0]?.text, isLessonsOnTheGenderOfTheMaleLine6[0]?.text, isLessonsOnTheGenderOfTheMaleLine7[0]?.text]
                            },
                            {
                                title: 'Уроки по роду женской линии',
                                data: [isLessonsOnTheGenderOfTheFemaleLine1[0]?.text, isLessonsOnTheGenderOfTheFemaleLine2[0]?.text, isLessonsOnTheGenderOfTheFemaleLine3[0]?.text, isLessonsOnTheGenderOfTheFemaleLine4[0]?.text, isLessonsOnTheGenderOfTheFemaleLine5[0]?.text, isLessonsOnTheGenderOfTheFemaleLine6[0]?.text, isLessonsOnTheGenderOfTheFemaleLine7[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '4. Самореализация ребенка',
                        subSections: [
                            {
                                title: 'Направление деятельности, варианты будущих профессий',
                                data: [isDirectionOfActivityOptionsForFutureProfessions1[0]?.text]
                            },
                            {
                                title: 'Для достижения успеха важно',
                                data: [isForSuccessItIsImportant1[0]?.text, isForSuccessItIsImportant2[0]?.text, isForSuccessItIsImportant3[0]?.text, isForSuccessItIsImportant4[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '5. Предназначение ребенка',
                        subSections: [
                            {
                                title: 'Первое, личное предназначение',
                                data: [isFirstPersonalPurpose1[0]?.text]
                            },
                            {
                                title: 'Второе, социальное предназначение',
                                data: [isSecondSocialPurpose1[0]?.text]
                            }
                        ]
                    },
                    {
                        title: '6. Подсознаетльный сценарий',
                        subSections: [
                            {
                                title: 'Подсознательные страхи и блоки',
                                data: [isSubconsciousScript1[0]?.text, isSubconsciousScript2[0]?.text, isSubconsciousScript3[0]?.text, isSubconsciousScript4[0]?.text]
                            }
                        ]
                    },
                    {
                        title: `7. Прогноз на год (${queryYearRange})`,
                        subSections: [
                            {
                                title: '',
                                data: [year1[0]?.text, year2[0]?.text, year3[0]?.text]
                            }
                        ]
                    },

                ]
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