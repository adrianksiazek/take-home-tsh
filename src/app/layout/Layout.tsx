import { Outlet } from 'react-router-dom';

import { Header } from 'components/header/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="h-screen bg-gray">
        <Outlet />
      </main>
    </div>
  );
};
