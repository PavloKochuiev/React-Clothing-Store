import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div class='container container--cart'>
      <div class='cart cart--empty'>
        <h2>
          Cart is empty <icon>😕</icon>
        </h2>
        <p>
          Most likely, you have not added anything to your cart.
          <br />
          To add something, go to the main page.
        </p>
        <Link to='/' class='button button--black'>
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
