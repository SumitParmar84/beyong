import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ProductSearch from './pages/ProductSearch'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import Whishlist from './pages/Wishlist'
import Footer from './components/Footer'
import Header from './components/Header'
import Protected from './pages/Protected'
import Address from './pages/Address'
import Payment from './pages/Payment'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:name' element={<ProductSearch />} />
        <Route path='/product/:id' element={<Protected Component={ProductDetails} />} />
        <Route path='cart' element={<Protected Component={Cart} />} />
        <Route path='address' element={<Protected Component={Address} />} />
        <Route path='payment' element={<Protected Component={Payment} />} />
        <Route path='/mywishlist' element={<Protected Component={Whishlist} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App