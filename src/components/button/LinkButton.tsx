import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { LinkButtonProps } from './Button.props';

export const LinkButton = ({ href, className, children }: LinkButtonProps) => {
  return (
    <Link to={href} className={clsx('btn btn-lg btn-secondary', className)}>
      {children}
    </Link>
  );
};
