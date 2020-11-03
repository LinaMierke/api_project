const { url } = require("inspector");
const mongoose = require("../db/connections")

const countriesSchema = new mongoose.Schema({

    name: String,
    capital: String,
    region: String,
    population: Number,
    currencies: [{
        code: String,
        name: String,
        symbol: String
    }],
    languages:[String],
    flag: String 


})

module.exports = mongoose.model("Countries", countriesSchema);