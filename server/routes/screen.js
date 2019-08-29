const wrap = require('async-middleware').wrap

const mongoose = require('mongoose')
const Screen = mongoose.model('Screen')
const Rest = require('../lib/rest')

class ScreenRest extends Rest {
  constructor() {
    super(Screen, false)
  }
}

const rr = new ScreenRest()

module.exports = {
  list: wrap(rr.list.bind(rr)),
  show: wrap(rr.show.bind(rr)),
  create: wrap(rr.create.bind(rr)),
  update: wrap(rr.update.bind(rr)),
  remove: wrap(rr.remove.bind(rr))
}
