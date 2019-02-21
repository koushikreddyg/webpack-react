import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "../App";

const PORT = 8080;

const app = express();

app.listen(PORT);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="js/index.js">${renderToString(<App />)}</script>
  </body>
</html>
`);
});
