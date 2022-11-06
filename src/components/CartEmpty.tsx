import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
  return (
    <div className='container container--cart'>
      <div className='cart cart--empty'>
        <h2>
          Cart is empty <span>😕</span>
        </h2>
        <p>
          Most likely, you have not added anything to your cart.
          <br />
          To add something, go to the main page.
        </p>
        <Link to='/React-Clothing-Store' className='button button--black'>
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
