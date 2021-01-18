const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const PORT = process.env.PORT || 5001

const app = express()

app.use(cors)

app.use(express.json)


//Connect DB//
mongoose.connect(process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("db up and running"))
    .catch(err => console.log(err))



app.listen(PORT, () => console.log(`Server started on ${PORT}`))