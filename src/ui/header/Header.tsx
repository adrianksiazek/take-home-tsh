import { useWindowWidth } from '@react-hook/window-size';

import { LinkButton } from 'ui';
import { Breakpoint } from 'enums/breakpoint.enum';

import { HeaderLogo } from './headerLogo/HeaderLogo';
import { HeaderSearch } from './headerSearch/HeaderSearch';

export const Header = () => {
  const onlyWidth = useWindowWidth();
  const showMobile = onlyWidth < Breakpoint.MD;

  return (
    <header className="py-12">
      <div className="container-2xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {showMobile ? (
            <div className="flex w-full flex-col gap-6">
              <div className="flex items-center justify-between">
                <HeaderLogo />
                <LinkButton href="/login">Log in</LinkButton>
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
              <LinkButton href="/login" className="min-w-fit">
                Log in
              </LinkButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
