import clsx from 'clsx';

import { ButtonProps } from './Button.types';

export const Button = ({ disabled, className, children, onClick, name }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx('btn relative inline-flex', className)}
      data-testid={`pw-${name}`}
    >
      {children}
    </button>
  );
};
