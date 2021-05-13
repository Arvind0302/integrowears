import React, { useEffect, useState } from 'react';
import './Product.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';

const Products = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <>
        {products.slice(0, 6).map((product) => {
          const { id, image, title, description, price, rating, halfstar } =
            product;

          return (
            <div className='col-3 product-item'>
              <figure key={id}>
                <Link to={`/product/${id}`}>
                  <img src={image} alt={title} className='img-fluid' />
                </Link>
              </figure>

              <h3>
                <Link to='/product'>{title}</Link>
              </h3>

              <div className='rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <i>{<FaStar />}</i>
                  ))}
                <i>{halfstar}</i>
              </div>

              <span className='price'>Ksh {price}</span>

              <p className='description'>{description}</p>
              <div className='buttons__container'>
                <button className='btn'>Add</button>
                <button className='btn'>
                  <Link to='/product'>View</Link>
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default Products;
