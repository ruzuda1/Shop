import React from 'react';
import s from '../BlockNotFound/NotFoundBlock.module.scss';
import { Link } from 'react-router-dom';

export const EmptyBasket = () => {
  return (
    <div className={s.main}>
      <h1>
        <span>😭</span>
        <br />
        Ваша корзина пустая{' '}
      </h1>
      <Link to="/">
      <p className={s.description}>Вернитесь на главную страницу и закажите что-то :D</p>
      </Link>
    </div>
  );
};
