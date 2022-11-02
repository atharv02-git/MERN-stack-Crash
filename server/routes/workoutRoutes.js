const express = require("express");
const router = express.Router();

const workoutModel = require("../model/workoutModel");

// Get Routes
router.get("/", (req, res) => {
  res.json({ msg: "Get workout route" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// Create workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
