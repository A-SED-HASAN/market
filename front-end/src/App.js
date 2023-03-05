import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Error from './pages/404'
import Account from './pages/Account'
import { Container } from 'react-bootstrap'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/account' element={<Account />} />
            <Route path='cart/:id?' element={<Cart />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
