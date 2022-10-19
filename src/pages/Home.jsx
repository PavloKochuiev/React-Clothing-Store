import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Items from '../components/Items';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://63501d4edf22c2af7b63d4a3.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>All items</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((index) => <Loader key={index} />)
          : items.map((obj) => <Items key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
