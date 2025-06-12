import { LogoIcon } from '../../ui/icons/logo-icon';
import styles from './sitebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.wrap}>
      <div className={styles.logo}>
        <LogoIcon />
        <span className={styles.logo__text}>BankDash.</span>
      </div>
    </aside>
  );
};
