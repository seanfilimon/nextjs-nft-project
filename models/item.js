import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    typeOfItem: String,
    owner: {
        displayName: String,
        image: String,
        address: String,
        publickey: String,
        role: String,
    },
    listing: {
        title: String,
        description: String,
        image: String,
        price: Number,
        offers: [],
        offersAmount: Number,
        currency: {
            type: String,
            default: "ETH"
        },
        owner: String,
        ownerAddress: String,
        ownerPublicKey: String,
        timeLeft: {
            type: Date,
        },
        created: {
            type: Date,
            default: Date.now
        }
    },
    auction: {

    },
})

const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default ItemModel;
