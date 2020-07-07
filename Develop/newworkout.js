const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercise: [{
    type: {
        type: String,
        trim: true,
        required: "What type of workout is this?"
    },
    name: {
      type: String,
      trim: true,
      required: "What is the name of your excersize?",
    },
    duration: {
      type: Number,
      required: "How many seconds or reps is this excersize?",
    },
    weight: {
      type: Number,
      required: "What is the weight for this excersize?",
    },
    reps: {
      type: Number,
      required: "How many reps?",
    },
    sets: {
      type: Number,
      required: "How many sets?",
    },
  }],
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
