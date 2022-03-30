import connectDB from "../../../middleware/mongodb";

const Item = require('../../../models/Item')

async function handler(req, res) {
    const { type } = req.query
    const { amount } = req.query

    const all = type == 'all'
    if(req.method === "GET") {

        all ? Item.find({}).then(items => {
            return res.status(200).json(items)
        }) : Item.find({ typeOfItem: type }).then(items => {
            return res.status(200).json(items)
        })
    } else {
        return res.status(400).json({error: "Invalid request"})
    }
}


export default connectDB(handler)