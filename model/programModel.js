const mongoose = require("mongoose")

const programModel = new mongoose.Schema({
    title: String,
    day: String,
})


const Program = mongoose.model(`TV`, programModel, `TV`);
module.exports = Program