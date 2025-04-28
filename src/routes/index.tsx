import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from './types';
import Main from '../pages/Main';
import Menu1 from '../pages/Menu1';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/menu1',
    component: Menu1,
  },
  /* {
    path: '*',
    component: NotFound,
  }, */
];



const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
          /* exact={route.exact} */
        />
      ))}
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/demo" element={<CardDemo />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/secondPage" element={<SecondPage />} />
      <Route path="/thirdPage" element={<ThirdPage />} /> */}
      {/* <Route path="/users/:id" element={<UserDetail />} /> */}
    </Routes>
    
  
  );
};

export default Router;