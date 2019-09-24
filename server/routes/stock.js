const mongoose = require('mongoose')
const Stock = mongoose.model('Stock')
const stockCache = require('../lib/stockCache')

async function show(req, res, next) {
  let instance = await Stock.findOne({ symbol: req.params.symbol }).exec()
  if (!instance) {
    const err = new Error('not found')
    err.status = 404
    return next(err)
  }
  // Make sure the cache is up to date
  instance = await stockCache.cacheStock(instance)
  res.json(instance)
}

async function update(req, res, next) {
  let instance = await Stock.findOneAndUpdate({ symbol: req.params.symbol }, req.body, { 'new': true }).exec()
  if (!instance) {
    const err = new Error('not found')
    err.status = 404
    return next(err)
  }

  res.json(instance)
}

async function remove(req, res, next) {
  let instance
  if (this.hasLogicalDelete) {
    instance = await Stock.findOne({ symbol: req.params.symbol }).exec()
    if (!instance) {
      const err = new Error('not found')
      err.status = 404
      return next(err)
    }

    instance.isDeleted = true

    await Stock.findOneAndUpdate({ symbol: req.params.symbol }, instance)
  } else {
    instance = await Stock.findOneAndRemove({ symbol: req.params.symbol }).exec()
    if (!instance) {
      const err = new Error('not found')
      err.status = 404
      return next(err)
    }
  }
  res.json(instance)
}

module.exports = {
  show,
  update,
  remove
}
