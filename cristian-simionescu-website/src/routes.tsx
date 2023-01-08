import Home from '@/modules/Home';
import NotFound from '@/modules/NotFound';

export interface RouteDefinition {
  element: JSX.Element;
  path: string;
  key: string;
}

const routes: RouteDefinition[] = [
  {
    element: <Home />,
    path: '/',
    key: 'home',
  },
  {
    element: <NotFound />,
    path: '*',
    key: 'not-found',
  },
];

export default routes;
