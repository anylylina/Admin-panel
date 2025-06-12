import styles from './search-input.module.scss';
import { SearchIcon } from '../icons/search-icon';

type Props = {
  placeholder?: string;
};

export const SearchInput = ({ placeholder = 'Search for something' }: Props) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input type="text" className={styles.input} placeholder={placeholder} />
    </div>
  );
};
