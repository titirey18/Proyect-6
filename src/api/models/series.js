const mongoose = require('mongoose')

const serieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    punctuation: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['action', 'animation', 'comedy', 'terror']
    }
  },
  {
    timestamps: true,
    collection: 'series'
  }
)

const Serie = mongoose.model('series', serieSchema, 'series')
module.exports = Serie
