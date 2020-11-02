const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, required: true}
})

const toDo = mongoose.model('To Do', toDoSchema)

module.exports = toDo
