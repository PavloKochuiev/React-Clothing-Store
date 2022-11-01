import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Items from '../components/Items';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Pagination from '../components/Pagination';

import { useEffect } from 'react';
import { SearchContext } from '../App';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchItems } from '../redux/slices/itemsSlice';

const Home = () => {
  const dispatch = useDispatch();

  const activeCategory = useSelector((state) => state.filterSlice.activeCategory);
  const selectedSort = useSelector((state) => state.filterSlice.selectedSort.sortProperty);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);
  const { items, status } = useSelector((state) => state.itemsSlice);

  const { searchValue } = useContext(SearchContext);

  const onClickCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getItems = async () => {
    dispatch(fetchItems({ activeCategory, currentPage, selectedSort }));

    window.scrollTo(0, 0);
  };

  const filteredItems = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <Items key={obj.id} {...obj} />);

  useEffect(() => {
    getItems();
  }, [activeCategory, selectedSort, currentPage]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={activeCategory} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>All items</h2>
      {status === 'error' ? (
        <Error />
      ) : (
        <div className='content__items'>
          {status === 'loading' ? [...new Array(6)].map((index) => <Loader key={index} />) : filteredItems}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
