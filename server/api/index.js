const express = require("express");
const bodyParser = require("body-parser");
const { devMiddleware } = require("../middlewares/devMiddleware");

const app = express();

app.listen("2000");

app.use(devMiddleware, bodyParser.json());

module.exports = { app };

require("./todoApi");
require("./loginApi");
