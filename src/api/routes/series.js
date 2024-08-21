const {
  getseries,
  getseriesById,
  getseriesBycategory,
  getSeriesByPunctuation,
  postseries,
  putseries,
  deleteseries
} = require('../controllers/series')

const seriesRouter = require('express').Router()

seriesRouter.get('/punctuation/:punctuation', getSeriesByPunctuation)
seriesRouter.get('/category/:category', getseriesBycategory)
seriesRouter.get('/:id', getseriesById)
seriesRouter.get('/', getseries)
seriesRouter.post('/', postseries)
seriesRouter.put('/:id', putseries)
seriesRouter.delete('/:id', deleteseries)

module.exports = seriesRouter
