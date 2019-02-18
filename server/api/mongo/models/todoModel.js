const { mongoose } = require("../mongoose");

const TodoModel = mongoose.model("todo", new mongoose.Schema({ task: String, authToken: String }));

module.exports = { TodoModel };
