import connectDB from "../../../middleware/mongodb";

import Item from "../../../models/Item";

async function handler(req, res) {
    if(req.method === "GET") {
        Item.find({}).then(items => {
            return res.status(200).json(items)
        })
        res.status(400).json({
            message: "Bad request"
        })
    } else {
        return res.status(400).json({error: "Invalid request"})
    }
}


export default connectDB(handler)