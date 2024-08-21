const Serie = require('../models/series')

const getseries = async (req, res, next) => {
  try {
    const series = await Serie.find()
    return res.status(200).json(series)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getseriesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const serie = await Serie.findById(id)
    return res.status(200).json(serie)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getseriesBycategory = async (req, res, next) => {
  try {
    const { category } = req.params
    const series = await Serie.find({ category })
    return res.status(200).json(series)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getSeriesByPunctuation = async (req, res, next) => {
  try {
    const { punctuation } = req.params
    const punctuationNumber = Number(punctuation)

    if (isNaN(punctuationNumber)) {
      return res.status(400).json({ message: 'Puntuación inválida' })
    }

    const series = await Serie.find({ punctuation: punctuationNumber })
    return res.status(200).json(series)
  } catch (error) {
    return res.status(404).json({ message: 'Error en la solicitud' })
  }
}

const postseries = async (req, res, next) => {
  try {
    const newserie = new Serie(req.body)
    const seriesave = await newserie.save()
    return res.status(201).json(seriesave)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const putseries = async (req, res, next) => {
  try {
    const { id } = req.params
    const newserie = new Serie(req.body)
    newserie._id = id
    const updateserie = await Serie.findByIdAndUpdate(id, newserie, {
      new: true
    })
    return res.status(200).json(updateserie)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const deleteseries = async (req, res, next) => {
  try {
    const { id } = req.params
    const seriedelete = await Serie.findByIdAndDelete(id)
    return res.status(200).json(seriedelete)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

module.exports = {
  getseries,
  getseriesById,
  getseriesBycategory,
  getSeriesByPunctuation,
  postseries,
  putseries,
  deleteseries
}
