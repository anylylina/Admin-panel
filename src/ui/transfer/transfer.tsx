import { useState } from 'react';
import styles from './transfer.module.scss';
import { Avatar } from '../avatar';
import { Input } from '../inputs/input';
import { Button } from '../button';
import { SendIcon } from '../icons/send-icon';
import { ArrowRightIcon } from '../icons/button-right-arrow';

export type User = {
  id: string;
  name: string;
  title: string;
  avatarUrl?: string;
};

type Props = {
  users: User[];
  onTransfer: (user: User, amount: number) => void;
};

export const Transfer: React.FC<Props> = ({ users, onTransfer }) => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    const num = parseFloat(amount);
    if (!num || num <= 0) return;
    onTransfer(selectedUser, num);
    setAmount;
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Quick Transfer</h3>
      <div className={styles.container}>
        <div className={styles.list}>
          {users.map(user => (
            <div
              key={user.id}
              className={`${styles.list__item} ${user.id === selectedUser.id ? styles.selected : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <Avatar imageUrl={user.avatarUrl} alt={user.name} />

              <span className={styles.item__name}>{user.name}</span>
              <span className={styles.item__title}>{user.title}</span>
            </div>
          ))}

          <button className={styles.arrow} onClick={() => {}}>
            <ArrowRightIcon width={18} height={18} />
          </button>
        </div>

        <div className={styles.amount}>
          <span className={styles.amount__title}>Write Amount</span>
          <Input
            type="string"
            placeholder="Write Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <Button
            theme="blue"
            text="Send"
            icon={<SendIcon width={26} height={26} />}
            onClick={handleSend}
            className={styles.button_send}
          />
        </div>
      </div>
    </div>
  );
};
