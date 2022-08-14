const express = require('express')
const app = express()
const router = require("./src/modules/router")
const cors = require('cors')
const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)


app.listen(PORT, console.log(`server is running on port ${PORT}`))