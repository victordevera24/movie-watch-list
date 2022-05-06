const User = require('../models/user')

module.exports = {
    newPage,
  };

  function newPage(req, res){
    res.render('toDoList/new', {title: "Add Task to List"});
}