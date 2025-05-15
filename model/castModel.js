const mongoose = require("mongoose")

const castModel = new mongoose.Schema({
    name: String,
    program: String,
})

const Cast = mongoose.model(`Cast`, castModel, `Cast`)
module.exports = Cast