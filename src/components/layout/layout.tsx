import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Sidebar />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
