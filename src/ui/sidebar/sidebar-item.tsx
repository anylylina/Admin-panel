import React from 'react';
import styles from './sidebar-item.module.scss';

import { NavLink } from 'react-router-dom';

type SidebarItemProps = {
  to: string;
  label: string;
  icon?: React.ReactNode;
};

export const SidebarItem = ({ to, label, icon }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${styles.item} ${styles.active}` : styles.item)}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </NavLink>
  );
};
