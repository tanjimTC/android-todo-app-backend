const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  blogTitle: String,
});

const Blog = mongoose.model("todos", blogSchema);
module.exports = Blog;
