const User = require('../models/user')
const Task = require('../models/task.js')

module.exports = {
    newPage,
    addToDo,
    index,
    delete: deleteTask,
    editPage,
    edit
  };

function newPage(req, res){
    res.render('toDoList/new', {title: "Add Task to List"});
}

function addToDo(req, res){
    const task = new Task(req.body)
    task.save(function(err){
        if(err) return res.render('toDoList/new', {title: "Add Task to List"});
        res.redirect('/toDoList/index')
    })
}

function index(req,res){
    Task.find({}, function(err,tasks){
        res.render('toDoList/index', {title: "To Do List", tasks})
    })
}

function deleteTask(req,res){
    console.log('in deletetask')
    console.log(req.params.id)
    Task.findByIdAndRemove(req.params.id, function(){
        res.redirect('/toDoList/index')
    })
}

function editPage(req, res){
    console.log('in edit')
    Task.findById(req.params.id, function(err, task){
        res.render('toDoList/edit', {title: "Edit Task", task})
    })
}

function edit(req,res){
    Task.findById(req.params.id, function(err, task){   
        console.log(task) 
        task.task = req.body.task
        console.log('in edit id')
        console.log('after name cahgen', task)
        task.save()
        res.redirect('/toDoList/index')
    })
}