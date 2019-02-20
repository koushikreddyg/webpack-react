const { app } = require("../index");
const bcrypt = require("bcrypt");
const { ObjectID } = require("mongodb");
const { LoginModel } = require("../../mongoose/models/loginModel");
const jwt = require("jsonwebtoken");

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const signedPassword = jwt.sign(hash, "Koushik123");

  const loginData = new LoginModel({
    email,
    password: signedPassword,
    isLogged: false,
    tasks: []
  });
  loginData
    .save()
    .then(response => {
      if (!response) {
        res.send({ error: "please check the credentials" });
      } else {
        res.send({
          authToken: response.authToken,
          email: response.email,
          message: "registration successful"
        });
      }
    })
    .catch(err => res.status(401).send(err));
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  LoginModel.findOne({ email }).then(response => {
    jwt.verify(response.password, "Koushik123", (err, decoded) => {
      if (err) {
        res.status(404).send(err);
      } else {
        bcrypt
          .compare(password, decoded)
          .then(response => {
            if (response) {
              LoginModel.findOneAndUpdate(
                { email },
                { $set: { authToken: new ObjectID(), isLogged: true } },
                { new: true }
              ).then(response => {
                if (!response) {
                  res.send({ error: "please check the credentials" });
                } else {
                  res.send({
                    authToken: response.authToken,
                    email: response.email,
                    message: "login successful"
                  });
                }
              });
            } else {
              res.status(404).send({ error: "invalid credentials" });
            }
          })
          .catch(err => res.status(404).send(err));
      }
    });
  });
});

app.get("/logout", (req, res) => {
  LoginModel.findOneAndUpdate(
    { authToken: req.headers.authtoken },
    { $set: { authToken: "", isLogged: false } },
    { new: true }
  ).then(response => {
    if (!response) {
      res.send({ error: "there was an error please try again later" });
    } else {
      res.send({
        email: response.email,
        message: "logout successful"
      });
    }
  });
});
