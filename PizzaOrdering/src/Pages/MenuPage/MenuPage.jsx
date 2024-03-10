import React, { useState } from 'react';
import PizzaList from '../../Components/PizzaList/PizzaList';
import './MenuPage.css';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="MenuPage">
      <h2 className="page-heading">Our Menu</h2>
      <div className="filter-options">
        <button
          className={`filter-button ${selectedCategory === '' ? 'active' : ''}`}
          onClick={() => handleCategoryFilter('')}
        >
          All
        </button>
        <button
          className={`filter-button ${selectedCategory === 'vegetarian' ? 'active' : ''}`}
          onClick={() => handleCategoryFilter('vegetarian')}
        >
          Vegetarian
        </button>
        <button
          className={`filter-button ${selectedCategory === 'gluten-free' ? 'active' : ''}`}
          onClick={() => handleCategoryFilter('gluten-free')}
        >
          Gluten-Free
        </button>
        <button
          className={`filter-button ${selectedCategory === 'spicy' ? 'active' : ''}`}
          onClick={() => handleCategoryFilter('spicy')}
        >
          Spicy
        </button>
      </div>
      <PizzaList category={selectedCategory} />
      <p className="disclaimer">* All prices are subject to change.</p>
    </div>
  );
};

export default MenuPage;
