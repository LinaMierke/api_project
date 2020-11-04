const countries = require("../models/countries")

module.exports = {

    index: (req, res) => {
        countries.find({})
            .then(country => {
                res.json(country)
            }
            )
    },
    showCapital: (req, res) => {
        countries.find({ capital: req.params.capital })
            .then(country => {
                res.json(country)
            })
    },

    showAllCapitals: (req, res) => {
        countries.find({}).select({"capital":1})
            .then(country => {
                res.json(country)
            })
    },

    showAllPopulation: (req, res) => {
        countries.find({}).select({"population":1})
            .then(country => {
                res.json(country)
            })
    },

    showPopulation: (req, res) => {
        countries.find({ population: req.params.population })
            .then(country => {
                res.json(country)
            })
    },
    create: (req, res) => {
        countries.create(req.body)
          .then(country => {
            res.json(country)
          })
      },
      
      edit: (req, res) => {
        countries.findOneAndUpdate({capital: req.params.capital}, req.body)
          .then(country => {
            res.json(country);
          }
          )
      },
      delete: (req, res) => {
        countries.findOneAndDelete({population: req.params.population})
          .then(country => {
            res.json(country)
          })
      }






}