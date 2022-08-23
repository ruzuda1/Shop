export const Categories = ({ activeCategories, onClickCategory }) => {
  const categories = ['Все', 'Iphones', 'IPads', 'Macbooks', 'AirPods'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeCategories === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
