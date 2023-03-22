const mongoose = require("mongoose")

const filmSchema = mongoose.Schema(
  {
    filmId: { type: mongoose.Schema.Types.ObjectId, ref: "Film" },

    title: {
      type: String,
      required: [true, "Please add an title"],
    },
    description: {
      type: String,
      required: [true, "Please add an description"],
    }, 
    country: {
      type: String,
     // required: [true, "Please add a end Country"],
    },
    cinema: {
      type: String,
     // required: [true, "Please add a end cinema"],
    },
    categorie: {
      type: String,
      //required: [true, "Please add a end cinema"],
    },
    age: {
      type: Number,
     // required: [true, "Please add a end type"],
    },
    type: {
      type: String,
      //required: [true, "Please add a end type"],
    },
    timestart: {
      type: Date,
      //required: [true, "Please add an start time"],
    },
    timeend: {
      type: Date,
      //required: [true, "Please add a end time"],
    }, 
    image: {
      type: String,
      //required: [true, "Please add a image"],
    }, 
    video: {
      type: String,
      //required: [true, "Please add a video"],
    },
    
  },
  {
    timestamps: true,
  },
)
module.exports = mongoose.model("films", filmSchema)