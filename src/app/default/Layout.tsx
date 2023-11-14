import { Outlet } from 'react-router-dom';

import { Header } from 'ui';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[90vh] bg-gray-light">
        <Outlet />
      </main>
    </div>
  );
};
