const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    title: String,
    description: String,
    type: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
})
mongoose.models = {};

const Activity = mongoose.model('Activity', ActivitySchema)

module.exports = Activity
