import closeIcon from '../../assets/img/closeIcon.png';
import { useContext, useRef } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useCallback } from 'react';
import { useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.general}>
      <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input} placeholder='Search...' />
      {value && <img onClick={onClickClear} className={styles.closeIcon} src={closeIcon} alt='closeIcon' />}
    </div>
  );
};

export default Search;
