//DEPENCIES
const express = require('express');
const ToDo = require('../models/todo.js'); //new
const toDo = require('../models/todo.js');
const router = express.Router();
// const app = express(); //is this needed?


// router.get('/', (req, res) => {
//     res.send('in articles') //to demonstrate that router is functioning, (localhost:3000/todo will result in this text)
// })


////ROUTES\\\\
//INDEX
router.get('/' , async (req, res) => {
    const pages = [{
        title: 'Test list',
        createdAt: Date.now(),
        task: 'Test task',
        completed: 'Yes',
    }]
    res.render('./pages/index.ejs', { pages: pages })
});

//NEW
router.get('/new', async (req, res) => {
    res.render('./pages/new.ejs',
    {pages: pages})
})

router.post('/newtask', async(req, res) =>{
    ToDo.create(req.body, (error)=>
    res.redirect('/todo')
    )
})

router.get('/:id', async (req, res) => {
    toDo.findById(req.params.id, (error, foundList) => {
        res.render('todo/show.ejs', {
            toDo: foundList
        })
    })
})


module.exports = router