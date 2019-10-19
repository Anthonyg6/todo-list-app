const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Todo = require("./todoModel/todo");

mongoose
  .connect(
    "mongodb+srv://AnthonyGallegos:n6hVxRAmH9r6uYg7@cluster0-roxtp.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.log("Was unable to connect to MongoDB");
    console.error(error);
  });

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.post("/api/todos", (req, res, next) => {
  const todo = new Todo({
    content: req.body.title
  });
  todo
    .save()
    .then(() => {
      res.status(201).json({
        message: "New Todo was been Posted"
      });
    })
    .catch(error => {
      console.log(error);
      res.status(400).json({
        error
      });
    });
});

app.delete("/api/todos/:id", (req, res, next) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted Todo"
      });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

app.get("/api/todos", (req, res, next) => {
  Todo.find()
    .then(todos => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(400).json({
        error
      });
    });
});

// app.use((req, res) => {
//   res.json({
//     message: "Connecting to the server"
//   });
// });

module.exports = app;
