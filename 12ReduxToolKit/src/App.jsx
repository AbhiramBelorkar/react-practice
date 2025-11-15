import './App.css'
import CartList from './components/CartList'
import Header from './components/Header'
import Product from './components/Product'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<CartList />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
