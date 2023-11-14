import { useWindowWidth } from '@react-hook/window-size';

import { LinkButton } from 'ui';
import { Breakpoint } from 'enums/breakpoint.enum';

import { HeaderLogo } from './headerLogo/HeaderLogo';
import { HeaderSearch } from './headerSearch/HeaderSearch';

export const Header = () => {
  const onlyWidth = useWindowWidth();
  const showMobile = onlyWidth < Breakpoint.MD;

  return (
    <header className="min-h-[10vh]">
      <div className="container-2xl mx-auto pb-12 pt-10 lg:pb-0">
        <div className="flex items-center justify-between gap-8">
          {showMobile ? (
            <div className="flex w-full flex-col gap-6">
              <div className="flex items-center justify-between">
                <HeaderLogo />
                <LinkButton href="/login" name="login-btn">
                  Log in
                </LinkButton>
              </div>
              <HeaderSearch />
            </div>
          ) : (
            <>
              <div className="flex w-full items-center gap-8 lg:gap-24">
                <HeaderLogo />
                <div className="flex w-full items-center gap-6">
                  <HeaderSearch />
                </div>
              </div>
              <LinkButton href="/login" className="min-w-fit" name="login-btn">
                Log in
              </LinkButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
