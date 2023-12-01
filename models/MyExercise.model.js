const mongoose = require("mongoose");

const myExercisesSchema = new mongoose.Schema({
  sets: {
    type: Number,
    required: [true, "Number of sets is required."],
  },
  repetitions: {
    type: Number,
    required: [true, "Number of repetitions is required."],
  },
  weigth: {
    type: Number,
    required: [true, "Number of Kg is required."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  exercises: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exercise",
  },
});

const MyExercise = mongoose.model("MyExercise", myExercisesSchema);

module.exports = MyExercise;
