import Logo from 'assets/images/logo.svg?react';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <Link to="/" data-testid="pw-logo">
      <Logo />
    </Link>
  );
};
