import React from 'react';
import { Link } from 'react-router-dom';
import offer from '../../images/hood4.png';
import './ExclusiveProduct.css';

const ExclusiveProduct = () => {
  return (
    <section className='offer'>
      <div className='col-2'>
        <Link to='/productdetails'>
          <img src={offer} alt='' className='offer-img' />
        </Link>
      </div>
      <div className='col-2 exclusive-text'>
        <p>Exclusive Available on Integro store</p>
        <h1>
          Printed Hoodie<span>.</span>
        </h1>
        <p>
          Men / Women Singer Hooded | Sweatshirts Plus Size | Unisex Pullover3D
          | Printed Hoodie
        </p>
        <Link to='productdetails' className='btn'>
          Buy Now &#8594;
        </Link>
      </div>
    </section>
  );
};

export default ExclusiveProduct;
