import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product18 from '../../images/Tshirt1.png';
import product19 from '../../images/sweatpant2.png';
import product20 from '../../images/Tshirts.png';
import product21 from '../../images/shoe.jpg';
import product22 from '../../images/airforce1.png';
import product23 from '../../images/airforce2.png';
import { useHistory, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './ProductDetails.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';
import Products from '../Product/Products';

const Product = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(id));
    return () => {
      //cleanup;
    };
  }, []);

  const addToCart = () => {
    history.push('/cart/' + id + '?qty=' + quantity);
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <div className='small-container single__product'>
        <div className='row'>
          <div className='col-2'>
            <img src={product.image} alt='' id='product__img' />

            <div className='small__img__row'>
              <div className='small__img__col'>
                <img src={product20} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={product20} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={product21} alt='' />
              </div>
            </div>
          </div>
          <div className=' col-2'>
            <h1>{product.title} </h1>
            <div className='rating'>
              {Array(4)
                .fill()
                .map((_, i) => (
                  <i>{<FaStar />}</i>
                ))}
              <i>{<FaStarHalfAlt />}</i>
            </div>
            <h4>Ksh {product.price}</h4>
            <div className='fields-container'>
              <select>
                <option>Select Size</option>
                <option>XXL</option>
                <option>XL</option>
                <option>Large</option>
                <option>Medium</option>
                <option>Small</option>
              </select>
              <select
                className='quantity'
                type='number'
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(product.stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            {product.stock > 0 ? (
              <button to='cart' className='btn' onClick={addToCart}>
                Add to cart
              </button>
            ) : (
              <div>Out Of Stock</div>
            )}

            <div className='product-description'>
              <h1>Description</h1>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
