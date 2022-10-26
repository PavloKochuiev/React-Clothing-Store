import styles from './Search.module.scss';
import closeIcon from '../../assets/img/closeIcon.png';

const Search = ({ searchValue, setSearchValue }) => {
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
