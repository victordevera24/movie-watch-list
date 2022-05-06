const express = require('express');
const router = express.Router();
const toDoListCtrl = require('../controllers/toDoList');

// this auth will lock all your URLS
const isLoggedIn = require('../config/auth');

router.get('/toDoList/:id',  toDoListCtrl.newPage);


module.exports = router;
