import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product/Product.js'

import { productListAction } from '../action/productAction'

import CircularProgress from '@mui/material/CircularProgress'

const Home = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)

  const { loading, products } = productList

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <div>
      <h4>{products.length} products available</h4>
      {loading ? (
        <div className='center'>
          <CircularProgress />
        </div>
      ) : (
        <div className='grid-container'>
          {products.map((item) => {
            return <Product product={item} key={item._id} />
          })}
        </div>
      )}
    </div>
  )
}

export default Home
