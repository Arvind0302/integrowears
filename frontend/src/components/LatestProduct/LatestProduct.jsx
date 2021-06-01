import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './LatestProduct.css';
import axios from 'axios';

const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products/seed');
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='small-container'>
      <h2 className='title'>Latest Products</h2>
      <div className='row'>
        {products.map((product) => {
          const { _id, price, image, title, rating, description } = product;
          return <Product key={_id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default LatestProduct;
