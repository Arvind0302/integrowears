import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import Product from '../../components/Product/Product';
import { listProducts } from '../../actions/productActions';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const ProductPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <div className='row'>
            {products.map((product) => {
              const { _id, price, image, title, rating, description } = product;
              return <Product key={_id} product={product} />;
            })}
          </div>
        )}

        <div className='page-btn'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
