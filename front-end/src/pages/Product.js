import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailAction } from '../action/productAction'
import { Button } from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'

import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import ReplySharpIcon from '@mui/icons-material/ReplySharp'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail
  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [id, dispatch])
  const addToCart = () => {
    navigate(`/cart/${id}`)
  }
  return (
    <>
      <Button>
        <Link to='/'>
          <ReplySharpIcon />
          back to main
        </Link>
      </Button>
      {loading ? (
        <div className='center'>
          <CircularProgress />
        </div>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Button
                  startIcon={<ShoppingCartSharpIcon />}
                  variant='outlined'
                  type='button'
                  onClick={addToCart}
                  className='btn-block'>
                  add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default Product
