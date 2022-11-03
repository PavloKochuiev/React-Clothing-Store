import closeIcon from '../../assets/img/closeIcon.png';
import React, { useRef } from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = (event: React.MouseEvent<HTMLImageElement>) => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 500),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
