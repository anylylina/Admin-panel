import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';

import { DashBordPage } from '../pages/dashbord';
import { TransactionsPage } from '../pages/transaction/transaction';
import { AccountsPage } from '../pages/accounts/accounts';
import { InvestmentsPage } from '../pages/investments/investments';
import { CreditCardsPage } from '../pages/credit-cards/credit-cards';
import { LoansPage } from '../pages/loans/loans';
import { ServicesPage } from '../pages/services-page/services';
import { PrivilegesPage } from '../pages/privileges/privileges';
import { ConfigurationPage } from '../pages/configuration-page/configuration';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <DashBordPage /> },
      { path: 'dashboard', element: <DashBordPage /> },
      { path: 'transactions', element: <TransactionsPage /> },
      { path: 'accounts', element: <AccountsPage /> },
      { path: 'investments', element: <InvestmentsPage /> },
      { path: 'credit-cards', element: <CreditCardsPage /> },
      { path: 'loans', element: <LoansPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'my-privileges', element: <PrivilegesPage /> },
      { path: 'setting', element: <ConfigurationPage /> },
    ],
  },

  {
    path: '/auth',
    children: [{ index: true, element: <DashBordPage /> }],
  },
]);
