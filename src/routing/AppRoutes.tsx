import { Route, Routes } from 'react-router-dom';

import { Home } from 'app/default/home/Home';
import { Layout } from 'app/default/Layout';
import { Login } from 'app/auth/login/Login';
import { AuthLayout } from 'app/auth/AuthLayout';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<Layout />}>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path="*" element={<Home />} />
    </Route>
    <Route path={AppRoute.home} element={<AuthLayout />}>
      <Route path={AppRoute.login} element={<Login />} />
    </Route>
  </Routes>
);
