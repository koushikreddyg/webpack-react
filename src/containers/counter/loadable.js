import React from "react";
import Loadable from "@loadable/component";
// import { payImage } from "../../assets";

const Loading = () => <div>Loading...</div>;

const Counter = Loadable(() => import("./index.js"), {
  LoadingComponent: Loading
});
export default Counter;

// export const image=JSON.parse(payImage)

