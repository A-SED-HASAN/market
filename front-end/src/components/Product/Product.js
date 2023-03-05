import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const { _id, image, name, price } = product
  return (
    <article className='p-3 rounded card'>
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant='top' />
      </Link>
      <Link to={`/product/${_id}`}>
        <Card.Title as='h4'>{name}</Card.Title>
      </Link>
      <Card.Text as='h3'>{price}.99$</Card.Text>
    </article>
  )
}

export default Product
