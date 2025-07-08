import { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import clsx from 'clsx';
import { ArrowIcon } from '../icons/arrow-icon';

export type Option = {
  value: string;
  title: string;
};

type Props = {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const Dropdown = ({ options, value, onChange, placeholder, disabled = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const activeOption = options.find(option => option.value === value);

  return (
    <div ref={ref} className={styles.dropdown}>
      <div className={clsx(styles.header, disabled && styles.disabled)} onClick={toggleDropdown}>
        <span className={styles.placeholder}>
          {activeOption?.title || placeholder || 'Select...'}
        </span>
        <ArrowIcon className={clsx(styles.arrow, isOpen && styles.arrow_open)} />
      </div>
      {isOpen && (
        <div className={styles.list}>
          {options.map(option => (
            <div
              key={option.value}
              className={clsx(styles.item, value === option.value && styles.active)}
              onClick={() => handleSelect(option.value)}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
