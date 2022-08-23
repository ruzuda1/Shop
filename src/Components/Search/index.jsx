import React from 'react';
import debounce from 'lodash.debounce';
import { useRef, useState } from 'react';
import AppContext from '../../App';

import style from './search.module.scss';

export const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = React.useContext(AppContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.currentTarget.value);
    updateSearchValue(event.currentTarget.value);
  };

  return (
    <div className={style.root}>
      <svg
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
        className={style.icon}>
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        ref={inputRef}
        className={style.placeInput}
        placeholder="Search items"
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <button className={style.cleanButton} onClick={() => onClickClear()}>
          Clean
        </button>
      )}
    </div>
  );
};
