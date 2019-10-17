const express = require("express");
const bodyParser = require("body-parser");

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
  console.log(req.body);
  res.status(201).json({
    message: "Todo was been created"
  });
});

app.get("/api/todos", (req, res, next) => {
  const todos = [
    {
      id: Math.random(),
      content: "clean out the dog kennel"
    },
    {
      id: Math.random(),
      content: " Wash the clothes"
    }
  ];

  res.status(200).json(todos);
});

app.use((req, res) => {
  res.json({
    message: "Connecting to the server"
  });
});

module.exports = app;
