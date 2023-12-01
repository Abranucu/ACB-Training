const mongoose = require("mongoose");

const workoutRoutineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Routine name is required."],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  myExercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MyExercise",
    },
  ],
});

const Workout = mongoose.model("Workout", workoutRoutineSchema);

module.exports = Workout;
