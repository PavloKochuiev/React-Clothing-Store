import { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['All', 'T-Shirts', 'Shirts', 'Hoodies', 'Jumpers'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((value, index) => (
          <li key={index} onClick={() => setActiveCategory(index)} className={activeCategory === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
