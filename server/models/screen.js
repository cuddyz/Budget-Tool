const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ScreenSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  investment: {
    type: Number,
    default: 0,
    required: false
  },
  stocks: {
    type: Array,
    default: [],
    required: false
  }
})

const common = require('./common')
ScreenSchema.plugin(common.auditFields)

// this makes it so logging outputs includes the virtual ones
ScreenSchema.set('toObject', {
  getters: true
})

// same as toObject, but remove uglies
ScreenSchema.method('toJSON', function() {
  let obj = this.toObject()
  delete obj._id
  return obj
})

mongoose.model('Screen', ScreenSchema)
