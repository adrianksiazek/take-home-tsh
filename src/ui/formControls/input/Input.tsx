import React from 'react';
import clsx from 'clsx';

import { InputProps } from './Input.types';

export const Input = ({
  name,
  placeholder,
  value,
  onChange,
  formControlClass,
  type,
  label,
  labelClass,
}: InputProps) => {
  const id = React.useId();

  return (
    <div className={clsx('w-full', label && 'flex flex-col gap-3')}>
      <label htmlFor={id} className={labelClass}>
        <span>{label}</span>
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx('form-control', formControlClass)}
        value={value}
        onChange={onChange}
        data-testid="pw-search"
      />
    </div>
  );
};
