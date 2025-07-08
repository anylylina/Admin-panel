import { Transfer, type User } from '../../ui/transfer/transfer';
import styles from './dashbord.module.scss';

export const DashBordPage = () => {
  const users: User[] = [
    {
      id: '1',
      name: 'Livia Bator',
      title: 'CEO',
    },
    {
      id: '2',
      name: 'Randy Press',
      title: 'Director',
    },
    {
      id: '3',
      name: 'Workman',
      title: 'Designer',
    },
  ];

  const handleTransfer = (user: User, amount: number) => {
    console.log(`Send $${amount} to ${user.name}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>🚀</div>
      <h1 className={styles.title}>Dashboard in progress</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Transfer users={users} onTransfer={handleTransfer} />
        <Transfer users={users} onTransfer={handleTransfer} />
      </div>
    </div>
  );
};
