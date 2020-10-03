const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
require("dotenv").config();
const PORT = process.env.PORT || 4200;

const uri = process.env.DB_PATH;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(helmet());

//Routes
const todos = require("./routes/todos");
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/todos", todos);

// Catch 404 Errors and send them to Error handler
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // Response to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });
  // Response to ourself
  console.error(err);
});

// Start the server
app.set("port", PORT);
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
