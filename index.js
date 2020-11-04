// const express = require("express");
// const app = express ();
// const countries = require("./lib/models/countries")
// const parser = require("body-parser") 

// app.use(parser.json())

// app.get("/", (req, res)=>{
//     countries.find({}).then( country =>{
//     res.json()
//     })
// })

// app.get("/countries/capital",(req, res)=>{
//     countries.findById(req.params.capital).then(country =>{
//         res.json(country)
//     })
// })


// app.listen(4000, ()=> {
//     console.log(" Hi Lina, your app is ON")
// })

const express = require('express')
const app = express ()


app.use(express.json())


app.use(require("./lib/routes/Country"))

app.listen(4000, () => console.log('listening on port 4000'))
