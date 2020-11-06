const mongoose = require("mongoose")
const Schema = mongoose.Schema

const toDoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    createdAt: {type: Date, required: true}, 
    task: {type: String, required: true},
    completed: {type: Boolean, required: true}
})

const toDo = mongoose.model("toDo", toDoSchema)


module.exports = toDo
 