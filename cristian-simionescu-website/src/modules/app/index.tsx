import { Routes, Route } from 'react-router-dom';

import routes, { RouteDefinition } from '@/routes';

const App = () => {
  return (
    <Routes>
      {routes.map(({ key, ...router }: RouteDefinition) => (
        <Route key={key} {...router} />
      ))}
    </Routes>
  );
};

export default App;
