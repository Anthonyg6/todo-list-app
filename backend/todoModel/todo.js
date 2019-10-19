const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  content: { type: String, required: true }
});
