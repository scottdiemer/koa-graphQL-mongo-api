const mongoose = require('mongoose')
const connectionString = require('./config/config') 

const initDB = () => {
  mongoose.connect(
  connectionString,
    { useNewUrlParser: true }
  )

  mongoose.connection.once('open', () => {
    console.log('connected to database')
  })
}

module.exports = initDB
