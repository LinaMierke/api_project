const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/countries", {userNewUrlParser:true});

module.exports=mongoose;