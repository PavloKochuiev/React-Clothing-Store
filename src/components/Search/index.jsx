import styles from './Search.module.scss';
import closeIcon from '../../assets/img/closeIcon.png';
import { useContext } from 'react';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={styles.general}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Search...'
      />
      {searchValue && (
        <img onClick={() => setSearchValue('')} className={styles.closeIcon} src={closeIcon} alt='closeIcon' />
      )}
    </div>
  );
};

export default Search;
