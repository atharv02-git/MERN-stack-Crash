require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

app.use("/api/workouts", workoutRoutes);

// Connect to mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("Connected to db & Server listening on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
