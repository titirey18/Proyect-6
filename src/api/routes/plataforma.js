const {
  getPlataforma,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
} = require('../controllers/plataforma')

const plataformaRouter = require('express').Router()

plataformaRouter.get('/:id', getPlataformaById)
plataformaRouter.get('/', getPlataforma)
plataformaRouter.post('/', postPlataforma)
plataformaRouter.put('/:id', putPlataforma)
plataformaRouter.delete('/:id', deletePlataforma)

module.exports = plataformaRouter
