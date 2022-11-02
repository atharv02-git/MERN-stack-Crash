const express = require("express");
const router = express.Router();

const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController")

// Get all workout Routes
router.get("/", getWorkouts);

// GET a single workout route
router.get("/:id", getSingleWorkout);

// Create workout
router.post("/", createWorkout );

// DELETE a workout
router.delete("/:id", deleteWorkout );

// UPDATE a workout
router.patch("/:id", updateWorkout );

module.exports = router;
