import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartSelectorItemByid } from '../redux/cart/selectors';
import { addItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';

type ItemsProps = {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
};

const Items: React.FC<ItemsProps> = ({ id, title, price, image, sizes }) => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = useState(0);

  const cartItem = useSelector(cartSelectorItemByid(id));
  const addedCount: any = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      image,
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className='items-wrapper'>
      <div className='items'>
        <Link key={id} to={`item/${id}`}>
          <img className='items__image' src={image} alt={title} />
          <h4 className='items__title'>{title}</h4>
        </Link>
        <div className='items__selector'>
          <ul>
            {sizes.map((size, index) => (
              <li key={size} onClick={() => setActiveSize(index)} className={activeSize === index ? 'active' : ''}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className='items__bottom'>
          <div className='items__price'>{price}.00 £</div>
          <div onClick={onClickAdd} className='button button--outline button--add'>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
