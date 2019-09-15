const moment = require('moment')
const axios = require('axios')
const mongoose = require('mongoose')

const Stock = mongoose.model('Stock')

const apiKey = '5J1CSL0Z8VRV8S36'
const stockEndpoint = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED'

async function cacheStock(stock) {
  const lastRefreshDate = moment(stock.lastRefreshDate).startOf('day')
  const todayDate = moment().get('date').startOf('day')

  if (todayDate <= lastRefreshDate) {
    const cachedStock = await Stock.findOne({ symbol: stock.symbol }).exec()
    if (!cachedStock) {
      throw new Error({ code: 404, message: 'Stock not in cache but thinks it is...' })
    }
    return cachedStock
  }

  const freshStock = (await axios.get(`${stockEndpoint}?symbol=${stock.symbol}&apikey=${apiKey}`)).data

  if (!freshStock) {
    throw new Error({ code: 500, message: 'AlphAvantage didnt return' })
  }

  const timeSeries = buildTimeSeries(freshStock)

  const stockBody = {
    symbol: stock.symbol,
    lastRefreshDate: moment(),
    timeSeries: timeSeries
  }

  const instance = new Stock(stockBody)
  try {
    await instance.validate()
  } catch (e) {
    throw new Error({ code: 500, message: e.message })
  }
  await instance.save()
  return instance
}

function buildTimeSeries(stock) {
  const fullSeries = stock['Weekly Adjusted Time Series']
  const timeSeries = {}

  Object.keys(fullSeries).forEach(key => {
    timeSeries[key] = fullSeries[key]['5. adjusted close']
  })

  return timeSeries
}

module.exports = {
  cacheStock
}
