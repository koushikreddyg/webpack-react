const { app } = require("../index");
const { ObjectID } = require("mongodb");
const { TodoModel } = require("../mongo/models/todoModel");

app.get("/getPosts", (req, res) => {
  TodoModel.find({})
    .then(response => res.status(202).send(response))
    .catch(response => res.status(401).send(response));
});

app.post("/addPost", (req, res) => {
  const newTodo = new TodoModel({ ...req.body, authToken: new ObjectID() });
  newTodo
    .save()
    .then(response => res.send(response))
    .catch(response => res.status(401).send(response));
});

app.put("/updatePost/:id", (req, res) => {
  const oldPost = req.params.id;

  TodoModel.findOneAndUpdate(
    { task: oldPost },
    { ...req.body, authToken: new ObjectID() }
  )
    .then(response => res.send(response))
    .catch(response => res.status(401).send(response));
});

app.delete("/deletePost/:id", (req, res) => {
  const oldPost = req.params.id;
  TodoModel.findOneAndDelete({ task: oldPost })
    .then(response => res.send(response))
    .catch(response => res.status(401).send(response));
});
