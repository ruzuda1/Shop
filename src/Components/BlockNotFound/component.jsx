import React from 'react';
import s from './NotFoundBlock.module.scss';

export const BlockNotFound = () => {
  return (
    <div className={s.main}>
      <h1>
        <span>😭</span>
        <br />
        Ничего не найдено{' '}
      </h1>
      <p className={s.description}>Такой страницы не существует</p>
    </div>
  );
};
