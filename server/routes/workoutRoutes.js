const express = require("express");
const router = express.Router();

// Get Routes
router.get("/", (req, res) => {
  res.json({ msg: "Get workout route" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// Create workout
router.post("/:id", (req, res) => {
  res.json({ msg: "Post new workout" });
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
