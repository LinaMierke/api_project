const Countries = require("../models/countries")
const CountriesData= require("./countries.json")

Countries.deleteMany({})
.then(()=> {
    Countries.create(
countriesData
    ).then(res => {
        console.log(res)
    })
})