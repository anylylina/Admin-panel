import React from 'react';
import styles from './Switch.module.scss';

type SwitchProps = {
  enabled: boolean;
  onChange?: (checked: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({ enabled, onChange }) => {
  const toggle = () => {
    onChange?.(!enabled);
  };

  return (
    <button
      className={`${styles.switch} ${enabled ? styles.checked : ''}`}
      onClick={toggle}
      role="switch"
      aria-checked={enabled}
      type="button"
    >
      <div className={styles.thumb}></div>
    </button>
  );
};
