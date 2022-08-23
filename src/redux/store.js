import { configureStore } from '@reduxjs/toolkit';
import FilterReducer from './Reducers/FilterReducer';
import BasketReducer from './Reducers/BasketReducer';

export const store = configureStore({
  reducer: { filter: FilterReducer,
  basket:BasketReducer },
});
