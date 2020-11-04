const express = require("express");
const router = express();


router.use("/Country", require("./Country"));


module.exports = router;