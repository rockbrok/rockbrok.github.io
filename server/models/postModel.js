const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  }
})

module.exports = mongoose.model('Posts', postSchema)