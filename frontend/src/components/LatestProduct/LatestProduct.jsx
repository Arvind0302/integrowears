import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './LatestProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loading from '../Loading/Loading'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const LatestProduct = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <div className='small-container'>
      <h2 className='title'>Latest Products</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div className='row'>
          {products.map((product) => {
            return <Product key={product._id} product={product} />
          })}
        </div>
      )}
    </div>
  )
}

export default LatestProduct
