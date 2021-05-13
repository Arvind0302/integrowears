import React from 'react';
import Products from '../Product/Products';
import './FeaturedProduct.css';

function FeaturedProduct() {
  return (
    <div className='small-container'>
      <h2 className='title'>Featured Products</h2>
      <div className='row'>
        <Products />
      </div>
    </div>
  );
}

export default FeaturedProduct;
