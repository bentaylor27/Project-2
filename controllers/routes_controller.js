//DEPENCIES
const express = require('express');
const app = express();
const toDo = require('../models/todo.js');
const lists = express.Router();


////ROUTES\\\\
//INDEX
app.get('/', (req, res) => {
    toDo.find({}, (error, allLists) => {
        res.render('pages/index.ejs', {
            lists: allLists,
            currentUser: req.session.currentUser
        })
    })
})

//NEW
app.get('/new', (req, res) => {
    res.render('todo/new.ejs', 
        {currentUser: req.session.currentUser}
    )
})

//CREATE

//EDIT/UPDATE

//PUT

//SHOW

//DELETE

module.exports = lists