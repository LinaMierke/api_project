const express = require("express")
const theCountries = require("../controllers/countries")
const router = express();


router.get("/",theCountries.index);
router.get("/:capital",theCountries.showCapital);
router.get("/:population", theCountries.showPopulation)
router.post("/", theCountries.create)
router.put("/:capital", theCountries.edit)
router.delete("/:population", theCountries.delete)


module.exports = router