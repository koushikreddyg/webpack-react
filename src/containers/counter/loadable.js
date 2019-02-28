import React from "react";
import Loadable from "@loadable/component";

const Loading = () => <div>Loading...</div>;

const Counter = Loadable(() => import("./index.js"), {
  LoadingComponent: Loading
});
export default Counter;
