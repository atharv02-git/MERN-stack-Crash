require('dotenv').config()
const express = require('express')

// express app
const app = express()

// middleware to get path and METHOD
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({msg : 'hello from the server'})
})

app.listen(process.env.PORT, (req, res) => {
    console.log('Server listening on port ',process.env.PORT)
})