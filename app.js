const express = require("express")
const app = express()

const sports = require("./routes/sports")

app.get("/", (req, res) => {
    res.send("List of sports")
})

app.use(express.json())
app.use("/sports", sports)

module.exports = app