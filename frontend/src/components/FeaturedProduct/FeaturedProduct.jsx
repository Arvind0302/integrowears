import React, { useEffect, useState } from 'react'
import './FeaturedProduct.css'
import Product from '../Product/Product'
import axios from 'axios'

function FeaturedProduct() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('/api/products/seed')
        setLoading(false)
        setProducts(data)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='small-container'>
      <h2 className='title'>Featured Products</h2>
      <div className='row'>
        {products.map((product) => {
          return <Product key={product._id} product={product} />
        })}
      </div>
    </div>
  )
}

export default FeaturedProduct
