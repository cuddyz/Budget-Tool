const wrap = require('async-middleware').wrap

const mongoose = require('mongoose')
const Entry = mongoose.model('Entry')
const Rest = require('../lib/rest')

class EntryRest extends Rest {
  constructor() {
    super(Entry, false)
  }
}

const rr = new EntryRest()

module.exports = {
  list: wrap(rr.list.bind(rr)),
  show: wrap(rr.show.bind(rr)),
  create: wrap(rr.create.bind(rr)),
  update: wrap(rr.update.bind(rr)),
  remove: wrap(rr.remove.bind(rr))
}
