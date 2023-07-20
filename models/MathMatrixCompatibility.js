import mongoose from "mongoose"


const MathMatrixCompatibilitySchema = new mongoose.Schema({
    isWhyDidYouMeet: [{value: Number, text: String}],
    isTheSpiritualEssenceOfTheCouple: [{value: Number, text: String}],
    isMaterialKarma: [{value: Number, text: String}],
    isCouplesSpiritualKarma: [{value: Number, text: String}],
    isGenericTasksOfPartners: [{value: Number, text: String}],
    isCouplesWellBeing: [{value: Number, text: String}],
    isThePurposeOfTheCouple: [{value: Number, text: String}]
});

export default mongoose.model('MathMatrixCompatibility', MathMatrixCompatibilitySchema)