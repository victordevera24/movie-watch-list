const express = require('express');
const router = express.Router();
const toDoListCtrl = require('../controllers/toDoList');

// this auth will lock all your URLS
const isLoggedIn = require('../config/auth');

router.post('/addToDo', isLoggedIn, toDoListCtrl.addToDo)
router.get('/toDoList', isLoggedIn,  toDoListCtrl.newPage);
router.get('/toDoList/index', isLoggedIn, toDoListCtrl.index)
router.delete('/tasks/:id', isLoggedIn, toDoListCtrl.delete)
router.get('/taskEdit/:id', isLoggedIn, toDoListCtrl.editPage)
router.put('/tasks/:id', isLoggedIn, toDoListCtrl.edit)

module.exports = router;
