require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workoutRoutes')
// express app
const app = express()

// middleware 
app.use(express.json());

app.use('/api/workouts', workoutRoutes)

app.listen(process.env.PORT, (req, res) => {
    console.log('Server listening on port ',process.env.PORT)
})