import React, { useEffect, useState } from 'react'
import './FeaturedCategories.css'
import Product from '../Product/Product'
import axios from 'axios'

const FeaturedCategories = () => {
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
    <div className='categories'>
      <div className='small-container'>
        <div className='row'>
          {products.map((product) => {
            return <Product key={product._id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories
