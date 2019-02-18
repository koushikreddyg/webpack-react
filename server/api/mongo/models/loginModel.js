const { mongoose } = require("../mongoose");

const LoginModel = mongoose.model(
  "login",
  new mongoose.Schema({
    login: String,
    password: String,
    authToken: String,
    isLogged: Boolean
  })
);

module.exports = { LoginModel };
