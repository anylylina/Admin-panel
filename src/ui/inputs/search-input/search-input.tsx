import { SearchIcon } from '../../icons/search-icon';
import { Input } from '../input/input';
import styles from './search-input.module.scss';

type Props = {
  placeholder?: string;
};

export const SearchInput = ({ placeholder = 'Search for something' }: Props) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <Input
        type="text"
        placeholder={placeholder}
        className={styles.inputWithIcon}
        onChange={() => {}}
      />
    </div>
  );
};
