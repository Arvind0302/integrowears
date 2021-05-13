import React from 'react';
import Products from '../Product/Products';
import './LatestProduct.css';

const LatestProduct = () => {
  return (
    <div className='small-container'>
      <h2 className='title'>Latest Products</h2>
      <div className='row'>
        <Products />
      </div>
    </div>
  );
};

export default LatestProduct;
