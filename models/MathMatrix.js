import mongoose from "mongoose"


const MathMatrixSchema = new mongoose.Schema({
    isPersonalQualities: {
        isGeneral: [],
        isPositive: [],
        isNegative: []
    },
    isTalents: [],
    isPastLife: [],
    isHealth: [],
    isPurpose: {
        isPurpose20_40: [],
        isPurpose40_60: [],
        isGeneralPurpose: []
    },
    isPersonalPowerCode: [],
    isChildren: [],
    isManagement: [],
    isParents: {
        parentMenLine: [],
        parentWomenLine: [],
        parentResentment: []
    },
    isLove: {
        loveMen: [],
        loveWomen: [],
        loveTotal: [],
        loveMenCharacter: [],
        loveWomenCharacter: []
    },
    isMoney: {
        moneyLineOfActivity: [],
        moneySuccess: [],
        MoneyFlow: []
    },
    isYear: [{value: Number, text: String}],
    isProgram: [{value: String, title: String, text: String}]
});

export default mongoose.model('MathMatrix', MathMatrixSchema)