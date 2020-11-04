const express = require("express")
const theCountries = require("../controllers/countries")
const router = express();


router.get("/",theCountries.index);
router.get("/c/:capital",theCountries.showCapital);
router.get("/capitals", theCountries.showAllCapitals)
router.get("/pop",theCountries.showAllPopulation);
router.get("/p/:population",theCountries.showPopulation);
router.post("/", theCountries.create)
router.put("/:capital", theCountries.edit)
router.delete("/:population", theCountries.delete)


module.exports = router