const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EntrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  income: {
    type: Array,
    default: [],
    required: false
  },
  expenses: {
    type: Array,
    default: [],
    required: false
  },
  assets: {
    type: Array,
    default: [],
    required: false
  },
  liabilities: {
    type: Array,
    default: [],
    required: false
  }
})

const common = require('./common')
EntrySchema.plugin(common.auditFields)

// this makes it so logging outputs includes the virtual ones
EntrySchema.set('toObject', {
  getters: true
})

// same as toObject, but remove uglies
EntrySchema.method('toJSON', function() {
  let obj = this.toObject()
  delete obj._id
  return obj
})

mongoose.model('Entry', EntrySchema)
