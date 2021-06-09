import { RouteProps } from "react-router";
import Home from "./modules/home";
import NotFound from "./modules/not-found";

export interface RouteDefinition extends RouteProps {
  key: string;
}

const routes: RouteDefinition[] = [
  {
    component: Home,
    key: "home",
    path: "/",
    exact: true,
  },
  {
    component: NotFound,
    key: "notFound",
  },
];

export default routes;
