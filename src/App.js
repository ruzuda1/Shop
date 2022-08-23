import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Basket } from './pages/Basket';
import { MainPage } from './pages/MainPage';
import { NotFound } from './pages/NotFound';

import React from 'react';

import './scss/app.scss';

const AppContext = React.createContext();

export function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default AppContext;
