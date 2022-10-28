import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Items from '../components/Items';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filterSlice.activeCategory);
  const selectedSort = useSelector((state) => state.filterSlice.selectedSort.sortProperty);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://63501d4edf22c2af7b63d4a3.mockapi.io/items?page=${currentPage}&limit=4&${
          activeCategory > 0 ? `category=${activeCategory}` : ''
        }&sortBy=${selectedSort}&order=desc`,
      )
      .then((res) => {
        setItems(res.data);
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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
