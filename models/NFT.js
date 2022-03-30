const mongoose = require('mongoose')

const NFTSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    currency: {
        type: String,
        default: "ETH"
    },
    owner: String,
    ownerAddress: String,
    ownerPublicKey: String,
    ownerPrivateKey: String,
    ownerSignature: String,
})
mongoose.models = {};

module.exports = mongoose.model('NFT', NFTSchema)
