const Todo = require('../models/Todo')

module.exports = class TodoService {
    static async getAllTodos(){
        try {
            const allTodos = await Todo.find();
            return allTodos
            
        } catch (error) {
            console.log(`Could not fetch todos: ${error.message}`);
        }        
    }
    static async addTodo(data){
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished,
            };

            const response = await new Todo(newTodo).save();
            return response
        } catch (error) {
            console.log(error);
        }
    }
}