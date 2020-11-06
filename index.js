
const express = require('express')
const app = express ()
const cors = require("cors");



app.use(express.json())

app.use(cors())

app.use(require("./lib/routes/Country"))

app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });

