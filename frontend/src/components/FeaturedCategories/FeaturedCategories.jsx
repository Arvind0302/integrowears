import React, { useEffect, useState } from 'react'
import './FeaturedCategories.css'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loading from '../Loading/Loading'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const FeaturedCategories = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <div className='categories'>
        <div className='small-container'>
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
      </div>
    </>
  )
}

export default FeaturedCategories
