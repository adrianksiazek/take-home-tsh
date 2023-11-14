import clsx from 'clsx';

export const AuthSideImage = () => {
  return (
    <div
      className={clsx(
        'relative hidden w-0 max-w-[712px] bg-gray bg-cover bg-center bg-no-repeat md:flex md:w-full',
        "bg-[url('/assets/desktop_background.png')]",
      )}
    ></div>
  );
};
