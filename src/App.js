import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Items from './components/Items';

import './scss/app.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>All items</h2>
          <div className='content__items'>
            <Items title='JACKET' price='50' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
