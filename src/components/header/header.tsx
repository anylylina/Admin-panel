import { useLocation } from 'react-router-dom';
import { Button } from '../../ui/button';
import { NotificationIcon } from '../../ui/icons/notification-icon';
import { SettingIcon } from '../../ui/icons/settings-icon';
import { SearchInput } from '../../ui/inputs/search-input';
import styles from './header.module.scss';
import { Account } from '../account/account';

export const Header = () => {
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/transactions': 'Transactions',
    '/accounts': 'Accounts',
    '/investments': 'Investments',
    '/credit-cards': 'Credit Cards',
    '/loans': 'Loans',
    '/services': 'Services',
    '/my-privileges': 'My Privileges',
    '/setting': 'Settings',
  };

  const currentPath = location.pathname;
  const pageTitle =
    currentPath === '/dashboard' ? 'Overview' : pageTitles[currentPath] || 'Overview';

  return (
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>

      <div className={styles.spacer} />

      <div className={styles.rightContent}>
        <SearchInput />
        <Button onClick={() => {}} icon={<SettingIcon />} />
        <Button onClick={() => {}} icon={<NotificationIcon />} />
        <div className={styles.avatarIcon}></div>
        <Account />
      </div>
    </header>
  );
};
