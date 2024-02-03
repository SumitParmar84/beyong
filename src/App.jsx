import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ProductSearch from './pages/ProductSearch'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import Shopping from './pages/Shopping'
import Whislist from './pages/Whislist'
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
        <Route path='myshopping' element={<Protected Component={Shopping} />}>
          <Route path='cart' element={<Protected Component={Cart} />} />
          <Route path='address' element={<Protected Component={Address} />}/>
          <Route path='payment' element={<Protected Component={Payment} />}/>
        </Route>
        <Route path='/mywhislist' element={<Protected Component={Whislist} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App