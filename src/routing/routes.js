import A from "../components/A";
import B from "../components/B";
import Home from "../containers/counter";

export default [
  {
    pathname: "/",
    component: Home,
    exact: true
  },
  {
    pathname: "/a",
    component: A,
    exact: true
  },
  {
    pathname: "/b",
    component: B,
    exact: true
  }
];
