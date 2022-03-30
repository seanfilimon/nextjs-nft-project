const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({

})


const CollectionModel = mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

module.exports = CollectionModel
