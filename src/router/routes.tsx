import { createBrowserRouter } from 'react-router-dom';
import DashBordPage from '../pages/dashbord/index';
import { Layout } from '../components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <DashBordPage /> }],
  },

  {
    path: '/auth',
    children: [{ index: true, element: <DashBordPage /> }],
  },
]);
