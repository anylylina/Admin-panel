import React from 'react';
import styles from './input.module.scss';

type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  className?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
};

export const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled = false,
  className = '',
  label = '',
  error = '',
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${styles.input} ${className}`}
        disabled={disabled}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
