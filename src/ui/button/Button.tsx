import clsx from 'clsx';

import { ButtonProps } from './Button.types';

export const Button = ({ disabled, className, children, onClick, name, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx('btn relative inline-flex', className)}
      data-testid={`pw-${name}`}
    >
      {children}
    </button>
  );
};
