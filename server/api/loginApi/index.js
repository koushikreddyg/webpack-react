const { app } = require("../index");
// const { ObjectId } = require("mongodb");
const { LoginModel } = require("../mongo/models/loginModel");
// const { LoginSuccessModel } = require("../mongo/models/loginSuccess");

app.post("/login", (req, res) => {
  new LoginModel({ ...req.body, authToken: "1234" })
    .save()
    .then(response => res.send(response));
});
