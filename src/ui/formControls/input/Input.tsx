import clsx from 'clsx';

import { InputProps } from './Input.types';

export const Input = ({ name, placeholder, value, onChange, formControlClass }: InputProps) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      className={clsx('form-control', formControlClass)}
      value={value}
      onChange={onChange}
      data-testid="pw-search"
    />
  );
};
