import { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['All', 'T-Shirts & Vests', 'Shirts', 'Hoodies', 'Jumpers', 'Jeans'];

  const onClickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((value, index) => (
          <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
