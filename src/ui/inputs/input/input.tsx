import React from 'react';
import styles from './input.module.scss';

type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

export const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
}: Props) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      disabled={disabled}
    />
  );
};
