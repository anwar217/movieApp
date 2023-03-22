const asyncHandler = require("express-async-handler")
const Film = require("../Models/filmModel")

const getFilms =async (req, res) => {
 try {
  const films = await Film.find()
 return res.status(200).json(films)
 } catch (error) {
  return res.status(500).json(error)
 }
}

const addFilm = asyncHandler(async (req, res) => {
  const { title, description,country,cinema,categorie,type, timestart, timeend, date,image,video } = req.body
  //Check if champ vide
  // || !categorie|| !type || !timestart || !timeend || !age|| !image || !video|| !country || !cinema
  if (!title || !description ) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  // Create Tache
  const film = await Film.create({
   // filmId: req.film._id,
    title,
    description,
    country ,
    cinema,
    categorie,
    type,
    timestart,
    timeend,
    image ,
    video,
  })
  res.send("Tache  Added Successfully")
})

const updateFilm = asyncHandler(async (req, res) => {
const film = await Film.findById(req.params.id)
if (!film) {
   res.status(400)
  throw new Error("Tache not found")
  }
 const updatedfilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
 })
 res.status(200).json(updatedfilm)
 })

const deleteFilm = asyncHandler(async (req, res) => {
  const film = await Film.findById(req.params.id)
  if (!film) {
    res.status(400)
    throw new Error("Tache not found")
  }
  await film.remove()
  res.status(200).json({ id: req.params.id })
})
module.exports = {
  getFilms,
  addFilm,
  updateFilm,
  deleteFilm,
}