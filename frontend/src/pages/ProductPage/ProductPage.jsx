import React from 'react';
import Footer from '../../components/Footer/Footer';
import './ProductPage.css';
import Products from '../../components/Product/Products';

const ProductPage = () => {
  return (
    <>
      <section className='row row-2'>
        <h2>All Products</h2>
        <select>
          <option>Default</option>
          <option>Sort by price</option>
          <option>Sort by popularity</option>
          <option>Sort by rating</option>
          <option>Sort by sales</option>
        </select>
      </section>
      <section className='small-container'>
        <div className='row'>
          <Products />
        </div>
        <div className='page-btn'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
