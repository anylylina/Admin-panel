import { GrayChipIcon } from '../icons/gray-chip-icon';
import { BlueCardIcon } from '../icons/blue-card-icon';
import { WhiteChipIcon } from '../icons/white-chip-icon';
import styles from './cards.module.scss';
import { GrayCardIcon } from '../icons/gray-card-icon';

type Props = {
  type?: 'blue' | 'white';
  balance: number;
  holder: string;
  validThru: string;
  number: string;
};

export const Cards: React.FC<Props> = ({ type = 'blue', balance, holder, validThru, number }) => {
  return (
    <div className={`${styles.card} ${type === 'white' ? styles.white : ''}`}>
      <div className={styles.balance_block}>
        <div className={styles.balance_details}>
          <div className={styles.balance}>Balance</div>
          <div className={styles.amount}>
            {balance.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </div>
        </div>
        <div className={styles.chip_icon}>
          {type === 'white' ? <GrayChipIcon /> : <WhiteChipIcon />}
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.holder_block}>
          <div className={styles.label}>CARD HOLDER</div>
          <div className={styles.value}>{holder}</div>
        </div>
        <div className={styles.valid_block}>
          <div className={styles.label}>VALID THRU</div>
          <div className={styles.value}>{validThru}</div>
        </div>
      </div>

      <div className={styles.number_block}>
        <div className={styles.number}>{number}</div>
        <div className={styles.card_icon}>
          {type === 'white' ? <GrayCardIcon /> : <BlueCardIcon />}
        </div>
      </div>
    </div>
  );
};
