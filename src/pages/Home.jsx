import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Items from '../components/Items';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState({ name: 'popularity', sortProperty: 'rating' });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63501d4edf22c2af7b63d4a3.mockapi.io/items?page=${currentPage}&limit=4&${
        activeCategory > 0 ? `category=${activeCategory}` : ''
      }&sortBy=${selectedSort.sortProperty}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, selectedSort, currentPage]);

  const filteredItems = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    })
    .map((obj) => <Items key={obj.id} {...obj} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={activeCategory} onClickCategory={(index) => setActiveCategory(index)} />
        <Sort value={selectedSort} onClickSort={(index) => setSelectedSort(index)} />
      </div>
      <h2 className='content__title'>All items</h2>
      <div className='content__items'>
        {isLoading ? [...new Array(6)].map((index) => <Loader key={index} />) : filteredItems}
      </div>
      <Pagination onChangePage={(value) => setCurrentPage(value)} />
    </div>
  );
};

export default Home;
