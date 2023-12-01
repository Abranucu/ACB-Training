const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Exercise name is required."],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    trim: true,
    ejercicioVideo: String,
  },
});

const Exercise = mongoose.model("Ejercicio", exerciseSchema);

module.exports = Exercise;
