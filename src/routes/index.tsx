import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from '@/layouts';

import Home from '@/pages/Home';
import Inbox from '@/pages/Inbox';
import Calendar from '@/pages/Calendar';
import Search from '@/pages/Search';
import Settings from '@/pages/Settings';
import Custom from '@/pages/Custom';
import Sub1 from '@/pages/Sub1';
import Sub2 from '@/pages/Sub2';
import NotFound from '@/pages/error/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />, // Layouts가 Outlet을 포함
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'inbox', element: <Inbox /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'search', element: <Search /> },
      { path: 'settings', element: <Settings /> },
      { path: 'custom', element: <Custom /> },
      { path: 'sub1', element: <Sub1 /> },
      { path: 'sub2', element: <Sub2 /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function Router () {
  return <RouterProvider router={router} />
}
