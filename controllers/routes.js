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
router.get('/' , (req, res) => {
    const pages = [{
        title: 'Test list',
        createdAt: Date.now(),
        task: 'Test task',
        completed: 'Yes',
    }]
    res.render('pages/index', { pages: pages })
});

//NEW
router.get('/new', (req, res) => {
    res.render('/views/pages/new.ejs',
    {pages: new page()})
})

//CREATE

//EDIT/UPDATE

//PUT

//SHOW

//DELETE

module.exports = router