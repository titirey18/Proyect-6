const mongoose = require('mongoose')

const plataformaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    series: [{ type: mongoose.Types.ObjectId, ref: 'series', required: false }]
  },
  {
    timestamps: true,
    collection: 'plataforma'
  }
)

const Plataforma = mongoose.model('Plataforma', plataformaSchema)
module.exports = Plataforma
