const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const mongoCreds = require('./mongoCreds')

require('./models/entry')
require('./models/screen')
require('./models/stock')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  console.log(mongoCreds.username)
  // mongoCreds is a local file that needs to be created manually in the /server dir
  await mongoose.connect(`mongodb://${mongoCreds.username}:${mongoCreds.password}@${mongoCreds.url}`)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser.json())

  const idValid = require('./middleware/id-validator')

  const entry = require('./routes/entry')
  const screen = require('./routes/screen')
  const stock = require('./routes/stock')

  app.use('/api/entries', express.Router()
    .get('/', entry.list)
    .get('/:id', idValid, entry.show)
    .post('/', entry.create)
    .put('/:id', idValid, entry.update)
    .delete('/:id', idValid, entry.remove))

  app.use('/api/screens', express.Router()
    .get('/', screen.list)
    .get('/:id', idValid, screen.show)
    .post('/', screen.create)
    .put('/:id', idValid, screen.update)
    .delete('/:id', idValid, screen.remove))

  app.use('/api/stocks', express.Router()
    .get('/:symbol', stock.show)
    .put('/:symbol', screen.update)
    .delete('/:symbol', screen.remove))

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
