const Plataforma = require('../models/plataforma')

const getPlataforma = async (req, res, next) => {
  try {
    const plataforma = await Plataforma.find().populate('series')
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getPlataformaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const plataforma = await Plataforma.findById(id).populate('series')
    if (!plataforma) {
      return res.status(404).json({ message: 'Plataforma no encontrada' })
    }
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const postPlataforma = async (req, res, next) => {
  try {
    const newplataforma = new Plataforma(req.body)
    const plataformasave = await newplataforma.save()
    return res.status(201).json(plataformasave)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const putPlataforma = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldplataforma = await Plataforma.findById(id)

    if (!oldplataforma) {
      return res.status(404).json({ message: 'Plataforma no encontrada' })
    }
    const combinedSeries = [
      ...new Set([...oldplataforma.series, ...req.body.series])
    ]

    const updatedPlataforma = await Plataforma.findByIdAndUpdate(
      id,
      { ...req.body, series: combinedSeries },
      { new: true }
    )

    return res.status(200).json(updatedPlataforma)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params
    const plataformadelete = await Plataforma.findByIdAndDelete(id)
    return res.status(200).json(plataformadelete)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

module.exports = {
  getPlataforma,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
}
