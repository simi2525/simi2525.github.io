import Home from "./modules/home";
import NotFound from "./modules/not-found";

export interface RouteDefinition {
  component: any;
  key: string;
  path: string;
}

const routes: RouteDefinition[] = [
  {
    component: Home,
    key: "home",
    path: "/",
  },
  {
    component: NotFound,
    key: "notFound",
    path: "*",
  },
];

export default routes;
