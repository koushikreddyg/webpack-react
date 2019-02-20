const { mongoose } = require("../");

const TodoModelSchema = new mongoose.Schema({
  task: String,
  authToken: String
});

const TodoModel = mongoose.model("todo", TodoModelSchema);

module.exports = { TodoModel, TodoModelSchema };
