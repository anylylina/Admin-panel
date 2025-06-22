import React from 'react';
import styles from './Switch.module.scss';
import { useLocalStorage } from '../../hooks';

type SwitchProps = {
  storageKey?: string;
  onChange?: (checked: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({ storageKey = 'switch-default', onChange }) => {
  const [checked, setChecked] = useLocalStorage<boolean>(storageKey, false);

  const toggle = () => {
    setChecked(prev => {
      const newValue = !prev;
      onChange?.(newValue);
      return newValue;
    });
  };

  return (
    <button
      className={`${styles.switch} ${checked ? styles.checked : ''}`}
      onClick={toggle}
      role="switch"
      aria-checked={checked}
      type="button"
    >
      <div className={styles.thumb}></div>
    </button>
  );
};
