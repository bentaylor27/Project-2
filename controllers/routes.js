//DEPENCIES
const express = require('express');
const router = express.Router();
// const app = express(); //is this needed?

const toDo = require('../models/todo.js');

router.get('/', (req, res) => {
    res.send('in articles') //to demonstrate that router is functioning, (localhost:3000/todo will result in this text)
})


////ROUTES\\\\
//INDEX
router.get('/', (req, res) => {
    toDo.find({}, (error, allLists) => {
        res.render('pages/index.ejs', {
            lists: allLists,
            currentUser: req.session.currentUser
        })
    })
})

//NEW
router.get('/new', (req, res) => {
    res.render('todo/new.ejs', 
        {currentUser: req.session.currentUser}
    )
})

//CREATE

//EDIT/UPDATE

//PUT

//SHOW

//DELETE

module.exports = router