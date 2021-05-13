import React from 'react';
import './FeaturedCategories.css';
import Products from '../Product/Products';

const FeaturedCategories = () => {
  return (
    <div className='categories'>
      <div className='small-container'>
        <div className='row'>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
