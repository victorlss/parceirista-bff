const mongoose = require('mongoose')

const options = {
  auto_reconnect: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  keepAlive: 120,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connect = () => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, options)
    .then(() => {
      console.log('DB Connection ready.')
    },
    error => {
      console.error('DB Connection error.', error)
    })
}

module.exports = { connect }
