const Todo = require("../models/todo");

module.exports = {
  newTodo: async (req, res, next) => {
    const newTodo = new Todo(req.value.body);
    const todo = await newTodo.save();
    res.status(201).json(todo);
  },
  deleteTodo: async (req, res, next) => {
    const todoId = req.params.todoId;
    const todo = await Todo.deleteOne({ _id: todoId });
    res.status(200).json(todo);
  },
};
