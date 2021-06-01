import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'

const Product = (props) => {
  const { product } = props

  return (
    <div className='col-3 product-item'>
      <figure key={product._id}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} className='img-fluid' />
        </Link>
      </figure>

      <h3>
        <Link to='/product'>{product.name}</Link>
      </h3>
      <Rating reviews={product.numReviews} rating={product.rating} />
      <span className='price'>Ksh {product.price}</span>
      <p className='description'>{product.description}</p>
      <div className='buttons__container'>
        <button className='btn'>Add</button>
        <button className='btn'>
          <Link to='/product'>View</Link>
        </button>
      </div>
    </div>
  )
}

export default Product
