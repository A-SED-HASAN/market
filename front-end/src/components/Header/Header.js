import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import IconButton from '@mui/material/IconButton'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import Badge from '@mui/material/Badge'

const Header = () => {
  const [length, setLength] = useState(1)

  const cartLength = () => {
    return JSON.parse(localStorage.getItem('cartItems')).length
  }
  useEffect(() => {
    setLength(cartLength())
  })
  return (
    <header>
      <Navbar className='nav-bg' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>A_SED_HASAN</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <IconButton aria-label='delete'>
                  <Badge badgeContent={length} color='primary'>
                    <ShoppingCartSharpIcon />
                  </Badge>
                </IconButton>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/account'>
              <Nav.Link>
                <IconButton aria-label='delete'>
                  <AccountCircleSharpIcon />
                </IconButton>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
