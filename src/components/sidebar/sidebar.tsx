import { LogoIcon } from '../../ui/icons/logo-icon';
import { SidebarItem } from '../../ui/sidebar/sidebar-item';
import styles from './sidebar.module.scss';

import { DashboardIcon } from '../../ui/icons/dashboard-icon';
import { TransactionsIcon } from '../../ui/icons/transactions-icon';
import { AccountsIcon } from '../../ui/icons/accounts-icon';
import { InvestmentsIcon } from '../../ui/icons/investments-icon';
import { CreditCardsIcon } from '../../ui/icons/credit-cards-icon';
import { LoansIcon } from '../../ui/icons/loans-icon';
import { ServicesIcon } from '../../ui/icons/services-icon';
import { PrivilegesIcon } from '../../ui/icons/privileges-icon';
import { ConfigurationIcon } from '../../ui/icons/configuration-icon';

export const Sidebar = () => {
  const sidebarItems = [
    { to: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { to: '/transactions', label: 'Transactions', icon: <TransactionsIcon /> },
    { to: '/accounts', label: 'Accounts', icon: <AccountsIcon /> },
    { to: '/investments', label: 'Investments', icon: <InvestmentsIcon /> },
    { to: '/credit-cards', label: 'Credit Cards', icon: <CreditCardsIcon /> },
    { to: '/loans', label: 'Loans', icon: <LoansIcon /> },
    { to: '/services', label: 'Services', icon: <ServicesIcon /> },
    { to: '/my-privileges', label: 'My Privileges', icon: <PrivilegesIcon /> },
    { to: '/setting', label: 'Setting', icon: <ConfigurationIcon /> },
  ];

  return (
    <aside className={styles.wrap}>
      <div className={styles.logo}>
        <LogoIcon />
        <span className={styles.logo__text}>BankDash.</span>
      </div>

      <nav className={styles.menu}>
        {sidebarItems.map(({ to, label, icon }) => (
          <SidebarItem key={to} to={to} label={label} icon={icon} />
        ))}
      </nav>
    </aside>
  );
};
