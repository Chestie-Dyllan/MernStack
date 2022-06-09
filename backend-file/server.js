//We first import the express and cors middleware. We also import movie.route.js which is a separate file we
//will create later to store our routes.

import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'

//We then create the server with

const app = express()

//We attach the cors and express.json middleware that express will use with:

app.use(cors())
app.use(express.json())

//express.json is the JSON parsing middleware to enable the server to read and accept JSON in a request’s
//body. We then specify the initial routes:

app.use("/api/v1/movies", movies)
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
})

export default app