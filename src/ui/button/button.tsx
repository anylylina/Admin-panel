import type React from 'react';
import styles from './button.module.scss';

type Props = {
  text?: string;
  theme?: 'blue' | 'gray';
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  text,
  theme = 'gray',
  onClick,
  icon,
  type = 'button',
  disabled = false,
  className,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${styles.button} ${className} ${theme === 'gray' ? styles.gray : styles.blue}`}
    >
      {text}
      {icon}
    </button>
  );
};
