const express = require("express")
const router = express.Router()
const sports = require("../controllers/sports")

router.get("/", sports.index)

router.get("/:name", sports.show)

router.post("/", sports.create)

router.patch("/:name", sports.update)

router.delete("/", sports.destroy)

module.exports = router