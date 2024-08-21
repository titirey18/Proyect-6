require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const seriesRouter = require('./src/api/routes/series')
const plataformaRouter = require('./src/api/routes/plataforma')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()
app.use('/api/v1/plataforma', plataformaRouter)
app.use('/api/v1/series', seriesRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('return not found')
})

app.listen(3000, () => {
  console.log('servidor levantado en http://localhost:3000')
})
