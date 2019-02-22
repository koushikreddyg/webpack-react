import React from "react";
import Routes from "./routing/clientRoutes";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";

const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(
  () => ({ name: "Koushik" }),
  preloadedState,
  applyMiddleware(thunk)
);

const history = createMemoryHistory();

console.log(store.getState());

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
