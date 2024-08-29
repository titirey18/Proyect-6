const mongoose = require('mongoose')
const Serie = require('../api/models/series')
const series = require('../data/series')

const semilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Proyecto6:B_-8-nvcrcnem5t@cluster0.z6rqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Serie.collection.drop()

    await Serie.insertMany(series)

    await mongoose.disconnect()
  } catch (error) {
    console.log('error')
  }
}

semilla()
