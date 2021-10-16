// const TodoService = require('../services/TodoService');
const todoService = require('../services/TodoService')

exports.get = (req, res) => {
    console.log("Get");
    res.send("Sucesso Get")
}

exports.getAll = async (req, res) => {
    console.log("Get All");
    try {
        const todos = await todoService.getAllTodos();
        
        if (!todos) {
            return res.status(404).json("There are no todos published yet!");
        }
        
        res.json(todos);
    } catch (err) {
        return res.status(500).json({"error": err}); 
    }
};

exports.add = async (req, res) => {
    console.log("Add");

    try {
        const createdTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createdTodo);
    } catch (err) {
        res.status(500).json({"error": err})
    }
;}

exports.update = (req, res) => {
    console.log("Update");
    res.send("Sucesso Update")
}

exports.delete = (req, res) => {
    console.log("Delete");
    res.send("Sucesso Delete")
}