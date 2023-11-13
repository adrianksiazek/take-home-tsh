import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { LinkButtonProps } from './Button.types';

export const LinkButton = ({ href, className, children, name }: LinkButtonProps) => {
  return (
    <Link to={href} className={clsx('btn btn-lg btn-secondary', className)} data-testid={`pw-${name}`}>
      {children}
    </Link>
  );
};
