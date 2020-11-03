const { url } = require("inspector");
const mongoose = require("../db/connections")

const countriesSchema = new mongoose.Schema({

    name: String,
    capital: String,
    region: String,
    population: Number,
    currencies: [String],
    languages:[String],
    flag: URL


})

module.exports = mongoose.model("Countries", countriesSchema);