const { mongoose } = require("../mongoose");
const { TodoModelSchema } = require("../models/todoModel");

const LoginModel = mongoose.model(
  "login",
  new mongoose.Schema({
    email: String,
    password: String,
    authToken: String,
    isLogged: Boolean,
    tasks: [TodoModelSchema]
  })
);

module.exports = { LoginModel };
