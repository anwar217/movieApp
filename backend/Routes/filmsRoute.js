const express = require("express")
const router = express.Router()
const {
  getFilms,
  addFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/filmController")
const Task = require("../Models/filmModel")

// get my tasks
router.get("/", getFilms)
router.post("/", addFilm)

router.put("/:id", updateFilm)
router.delete("/:id", deleteFilm)

module.exports = router