import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Items from '../components/Items';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filterSlice.activeCategory);
  const selectedSort = useSelector((state) => state.filterSlice.selectedSort.sortProperty);
 
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63501d4edf22c2af7b63d4a3.mockapi.io/items?page=${currentPage}&limit=4&${
        activeCategory > 0 ? `category=${activeCategory}` : ''
      }&sortBy=${selectedSort}&order=desc`,
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
        <Categories value={activeCategory} onClickCategory={onClickCategory} />
        <Sort />
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
