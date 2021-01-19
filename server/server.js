const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv/config")
const PORT = process.env.PORT || 5000

const app = express()


app.use(cors())
app.use(express.json())


//Connect DB//
mongoose.connect(process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("db up and running"))
    .catch(err => console.log(err))


// import routes//
const roomRoutes = require("./routes/room")

// room route//
app.use("/rooms",roomRoutes)


app.listen(PORT, () => console.log(`Server started on ${PORT}`))