require("dotenv").config() 
const express = require("express") 
const morgan = require("morgan") 
const {log} = require("mercedlogger")
const cors = require("cors")
const UserRouter = require('./src/routes/user.routes')
const DataRouter = require('./src/routes/data.routes')
const ViewRouter = require('./src/routes/view.routes')
const insertRawData = require("./src/raw")
const {PORT = 3000} = process.env

const app = express()

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies


// ROUTES AND ROUTES
app.get("/", (req, res) => {
    res.send("this is the test route to make sure server is working")
})

app.use("/user", UserRouter)
app.use("/data", DataRouter)
app.use("/views", ViewRouter)


insertRawData()
// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))