import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ProductSearch from './pages/ProductSearch'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import ShoppingCart from './pages/ShoppingCart'
import Whislist from './pages/Whislist'
import Footer from './components/Footer'
import Header from './components/Header'
import Protected from './pages/Protected'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/products/:name'  element={<ProductSearch/>}/>
        <Route path='/product/:id'  element={<Protected Component={ProductDetails}/>}/>
        <Route path='/mycart'  element={<Protected Component={ShoppingCart} />}/>
        <Route path='/mywhislist'  element={<Protected Component={Whislist} />}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/logout'  element={<Logout/>}/>
        <Route path='*'  element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App