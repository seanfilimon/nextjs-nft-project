const connectDB = require('../../../middleware/mongodb');

const Item = require('../../../models/item')

async function handler(req, res) {
    if(req.method === "GET") {
        Item.find({}).then(items => {
            return res.status(200).json(items)
        })

    } else {
        return res.status(400).json({error: "Invalid request"})
    }
}


export default connectDB(handler)