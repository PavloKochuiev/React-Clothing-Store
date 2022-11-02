import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Items from '../components/Items';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Pagination from '../components/Pagination';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchItems, itemsSelector } from '../redux/slices/itemsSlice';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const selectedSort = useSelector((state: any) => state.filterSlice.selectedSort.sortProperty);
  const { activeCategory, currentPage, searchValue } = useSelector(filterSelector);
  const { items, status } = useSelector(itemsSelector);

  const onClickCategory = (id: number) => {
    dispatch(setActiveCategory(id));
  };

  const onChangePage = (value: number) => {
    dispatch(setCurrentPage(value));
  };

  const getItems = async () => {
    // @ts-ignore
    dispatch(fetchItems({ activeCategory, currentPage, selectedSort }));

    window.scrollTo(0, 0);
  };

  const filteredItems = items
    .filter((obj: any) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj: any) => (
      <Link key={obj.id} to={`item/${obj.id}`}>
        {' '}
        <Items {...obj} />
      </Link>
    ));

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
