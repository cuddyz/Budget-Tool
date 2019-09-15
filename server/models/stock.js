const mongoose = require('mongoose')

const Schema = mongoose.Schema

const StockSchema = new Schema({
  symbol: {
    type: String,
    required: true
  },
  lastRefreshDate: {
    type: String,
    required: true
  },
  timeSeries: {
    type: Object,
    default: {},
    required: false
  }
})

const common = require('./common')
StockSchema.plugin(common.auditFields)

// this makes it so logging outputs includes the virtual ones
StockSchema.set('toObject', {
  getters: true
})

// same as toObject, but remove uglies
StockSchema.method('toJSON', function() {
  let obj = this.toObject()
  delete obj._id
  return obj
})

mongoose.model('Stock', StockSchema)
