import { Route, Switch } from "react-router";
import routes from "../../routes";

const App = () => {
  return (
    <Switch>
      {routes.map((router) => (
        <Route {...router} />
      ))}
    </Switch>
  );
};

export default App;
