import { Outlet } from 'react-router-dom';
import Logo from 'assets/images/logo.svg?react';

import { LinkButton } from 'ui';

import { AuthSideImage } from './authSideImage/AuthSideImage';

export const AuthLayout = () => {
  return (
    <main className="flex min-h-screen">
      <AuthSideImage />
      <div className="flex w-full flex-col">
        <div className="my-10 flex w-full flex-col items-center justify-between gap-6 px-5 pb-8 pt-3 2xs:flex-row 2xs:gap-0 md:pb-16 md:pt-24 xl:px-32">
          <Logo />
          <LinkButton href="/">Back to home page</LinkButton>
        </div>
        <div className="relative box-content flex w-full flex-col items-center justify-center px-5 pb-8 pt-3 md:max-w-md md:pb-16 md:pt-24 xl:px-32">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
