const { app } = require("../index");
const { LoginModel } = require("../mongo/models/loginModel");

app.get("/getPosts", (req, res) => {
  LoginModel.findOne({ authToken: req.headers.authtoken })
    .then(response => res.status(202).send(response.tasks))
    .catch(response => res.status(401).send(response));
});

app.put("/addPost", (req, res) => {
  LoginModel.findOneAndUpdate(
    { authToken: req.headers.authtoken },
    {
      $push: { tasks: req.body }
    },
    { new: true }
  )
    .then(response => res.send(response.tasks))
    .catch(response => res.status(401).send(response));
});

app.delete("/deletePost", (req, res) => {
  LoginModel.findOneAndUpdate(
    { authToken: req.headers.authtoken },
    { $pull: { tasks: req.body } },
    { new: true }
  )
    .then(response => res.send(response.tasks))
    .catch(response => res.status(401).send(response));
});
