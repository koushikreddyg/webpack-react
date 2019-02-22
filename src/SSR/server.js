/* eslint-disable */
import express from "express";
import path from "path";
import { StaticRouter } from "react-router-dom";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import Layout from "../routing/clientRoutes";

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "..", "public")));

app.get("*", (req, res) => {
  const store = createStore(
    () => ({
      name: "none"
    }),
    {}
  );
  const context = {};

  // store.dispatch( initializeSession( ) );

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactDom = renderToString(jsx);
  const reduxState = store.getState();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlTemplate(reactDom, reduxState));
});

app.listen(2048);

function htmlTemplate(reactDom, reduxState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" type="text/css" href="./css/index.css" />
        </head>
        
        <body>
            <div id="root">${reactDom}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(reduxState).replace(
              /</g,
              "\\u003c"
            )}
            </script>
            <script src="./js/index.js"></script>
        </body>
        </html>
    `;
}
