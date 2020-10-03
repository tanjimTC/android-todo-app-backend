const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  todoTitle: String,
});

const Todo = mongoose.model("todos", todoSchema);
module.exports = Todo;
