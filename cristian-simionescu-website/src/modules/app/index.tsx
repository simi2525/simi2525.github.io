import { Routes, Route } from "react-router-dom";
import routes from "../../routes";

const App = () => {
  return (
    <Routes>
      {routes.map((router) => (
        <Route element={<router.component />} {...router} />
      ))}
    </Routes>
  );
};

export default App;
