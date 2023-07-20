import mongoose from "mongoose"


const MathMatrixChildSchema = new mongoose.Schema({
    isPersonalQualitiesChildren: {
        isCharacteristicsOfQualities: [],
        isRecommendationsForParents: [],
        isChildInCommunication: []
    },
    isRelationshipWithParents: {
        isWhatToConsiderWhenRaisingAChild: [],
        isLessonsOnTheGenderOfTheMaleLine: [],
        isLessonsOnTheGenderOfTheFemaleLine: []
    },
    isChildTalents: [],
    isDirectionsOfHobbiesAndHobbyGroups: [],
    isSelfRrealizationOfTheChild: {
        isDirectionOfActivityOptionsForFutureProfessions: [],
        isForSuccessItIsImportant: []
    },
    isPurposeOfTheChild: {
        isFirstPersonalPurpose: [],
        isSecondSocialPurpose: []
    },
    isSubconsciousScript: [],
    isYear: []
});

export default mongoose.model('MathMatrixChild', MathMatrixChildSchema)