
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from "./Pages/Cart"
import LoginSign from './Pages/LoginSign'
import { Footer } from './Components/Footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/men' element={<ShopCategory categroy="men" banner={men_banner}/>}></Route>
            <Route path='/women' element={<ShopCategory categroy="women" banner={women_banner}/>}></Route>
            <Route path='/kids' element={<ShopCategory categroy="kid" banner={kids_banner}/>}></Route>
            <Route path='/product/:productId' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSign/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>   
    </>
  )
}

export default App
