import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './scss/app.scss';

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default App;
