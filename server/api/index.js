const express = require("express");
const { devMiddleware } = require("../middlewares/devMiddleware");

const app = express();

app.listen("2000");

app.use(devMiddleware);

app.get("/getPosts", (req, res) => {
  res.status(202).send({ name: "Koushik" });
});
