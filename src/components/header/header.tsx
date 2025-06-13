import { Avatar } from '../../ui/avatar/avatar';
import { Button } from '../../ui/button';
import { NotificationIcon } from '../../ui/icons/notification-icon';
import { SettingIcon } from '../../ui/icons/settings-icon';
import { SearchInput } from '../../ui/inputs/search-input';
import styles from './header.module.scss';

type HeaderProps = {
  pageTitle?: string;
  icon?: React.ReactNode;
};

export const Header = ({ icon, pageTitle = 'Overview' }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>

      <div className={styles.spacer} />

      <div className={styles.rightContent}>
        <SearchInput />

        <Button onClick={() => {}} icon={<SettingIcon />} />
        <Button onClick={() => {}} icon={<NotificationIcon />} />
        <div className={styles.avatarIcon}>{icon || <Avatar />}</div>
      </div>
    </header>
  );
};
