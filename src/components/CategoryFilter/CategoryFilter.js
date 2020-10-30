import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.scss';

const CategoryFilter = ({ onFilter, categories }) => {
  const handleFilter = ({ target }) => {
    onFilter(target.value);
  };

  const renderCategoriesList = categories.map(category => {
    if (category.common_name !== null) {
      return (
        <option
          key={category.id}
          id={category.common_name}
          name={category.common_name}
        >
          {category.common_name}
        </option>
      );
    }

    return (
      <option
        key={category.id}
        id={category.name}
        name={category.name}
      >
        {category.name}
      </option>
    );
  });

  return (
    <div className="filters-wrapper">
      <select className="categories-list" onChange={handleFilter}>
        <option name="All" key="All">All</option>
        {renderCategoriesList}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onFilter: PropTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  categories: [],
};

export default CategoryFilter;
