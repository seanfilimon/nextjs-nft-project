import connectDB from '../../../middleware/mongodb';

const Activity = require('../../../models/Activity')

async function handler(req, res) {
    if(req.method === "GET") {
        Activity.find({}).then(items => {
            return res.status(200).json(items)
        })

    } else if (req.method === "POST") {
        return res.status(400).json({error: "Invalid request"})
    }
}


export default connectDB(handler)