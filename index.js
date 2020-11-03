const express = require("express");
const app = express ();
const countries = require("./lib/models/countries")
const parser = require("body-parser") 

app.use(parser.json())

app.get("/countries", (req, res)=>{
    countries.find({}).then( country =>{
    res.json()
    })
})

app.get("/countries/capital",(req, res)=>{
    countries.findById(req.params.capital).then(country =>{
        res.json(country)
    })
})


app.listen(4000, ()=> {
    console.log(" Hi Lina, your app is ON")
})