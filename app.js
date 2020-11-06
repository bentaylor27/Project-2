const mongoose = require('mongoose')
const toDo = require('./models/todo.js')
const { modelName } = require('./models/todo.js')

// Config
const mongoURI = 'mongodb://localhost:27017/' + 'tasks'
const db = mongoose.connection


// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

module.exports=db;