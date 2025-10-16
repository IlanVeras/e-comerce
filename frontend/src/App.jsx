import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Shop from "./Pages/Shop"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSingup from './Pages/LoginSingup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/womans' element={<ShopCategory category="womans"/>}/>
          <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSingup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
