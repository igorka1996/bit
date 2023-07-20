import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    historyOfOrders: [{name: String, price: String, date: String}],
    matrixSearchHistory: {
        personal: [{gender: String, name: String, date: String}],
        children: [{gender: String, name: String, date: String}],
        compatibility: [{datePartnerOne: String, datePartnerTwo: String}]
    },
    subscription: [],
    totalAmount: Number,
    avatarURL: String,
    dateOfBirth: String,
    resetPasswordToken: String,
    resetPasswordExpires: Number,
    phone: String
}, {
    timestamps: true
});


export default mongoose.model('User', UserSchema)

