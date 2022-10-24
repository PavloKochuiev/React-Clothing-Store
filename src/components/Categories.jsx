const Categories = ({ value, onClickCategory }) => {
  const categories = ['All', 'T-Shirts', 'Shirts', 'Hoodies', 'Jumpers'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index} onClick={() => onClickCategory(index)} className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
