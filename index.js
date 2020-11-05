
const express = require('express')
const app = express ()


app.use(express.json())


app.use(require("./lib/routes/Country"))

app.listen(4000, () => console.log('listening on port 4000'))
