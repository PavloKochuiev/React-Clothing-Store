import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullItem from './pages/FullItem';

import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/React-Clothing-Store' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/React-Clothing-Store/item/:id' element={<FullItem />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
