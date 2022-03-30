const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    displayName: String,
    custom_url: String,
    email: String,
    username: String,
    bio: String,
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    profile_pic: String,
    ownerAddress: String,
    ownerPublicKey: String,
    ownerPrivateKey: String,
    ownerSignature: String,
})


module.exports = mongoose.model('Account', AccountSchema)
