import Home from '@/modules/home';
import NotFound from '@/modules/not-found';

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
    key: 'notFound',
  },
];

export default routes;
