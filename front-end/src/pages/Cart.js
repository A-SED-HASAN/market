import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../action/cartAction'

import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const Cart = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id))
    }
  }, [dispatch, id])
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <>
      <Row>
        <Col md={8}>
          <h2>cart </h2>
          {cartItems.length === 0 ? (
            <p>cart is empty</p>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => {
                return (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>{item.name}</Col>
                      <Col md={2}>{item.price}</Col>
                      <Col md={2}>
                        <IconButton
                          aria-label='delete'
                          variant='outlined'
                          onClick={() => removeFromCartHandler(item.product)}>
                          <DeleteIcon />
                        </IconButton>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          )}
        </Col>
        {cartItems.length > 0 && (
          <Col md={4}>
            <ListGroup variant='flush' className='rounded'>
              <ListGroup.Item>
                total : {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Cart
