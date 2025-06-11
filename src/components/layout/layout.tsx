import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      Layout <Outlet />{' '}
    </div>
  );
};
