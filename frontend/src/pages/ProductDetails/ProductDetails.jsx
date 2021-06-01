import React, { useEffect, useState } from 'react'
import product20 from '../../images/Tshirts.png'
import product21 from '../../images/shoe.jpg'
import { useHistory, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../../actions/productActions'
import Rating from '../../components/Rating/Rating'
import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const ProductDetails = () => {
  const productDetails = useSelector((state) => state.productDetails)
  const { product, loading, error } = productDetails

  const productList = useSelector((state) => state.productList)
  const { products } = productList
  const dispatch = useDispatch()
  const { productId } = useParams()
  const history = useHistory()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(detailsProduct(productId))
    return () => {
      //cleanup;
    }
  }, [dispatch, productId])

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${quantity}`)
  }

  return loading ? (
    <Loading>Loading...</Loading>
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
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
          <div className='col-2'>
            <h1>{product.title} </h1>
            <Rating rating={products.rating} reviews={products.reviews} />
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
                  setQuantity(e.target.value)
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
              <button to='cart' className='btn' onClick={addToCartHandler}>
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
    </>
  )
}

export default ProductDetails
