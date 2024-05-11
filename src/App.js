import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';


import Cart from './pages/Cart';
import Payments from './pages/Payments';
import Wishlist from './pages/Wishlist';
import Home from './pages/Home';
import Product from './pages/Product';
import PaymentConfOrder from './pages/PaymentConfOrder'
import WishlistItemsNew from './pages/WishlistItemsNew';
import WishlistItems from './components/WishlistItems/WishlistItems';



function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Payments' element={<Payments/>}/>  
      <Route path='/Wishlist' element={<Wishlist/>}/>
      <Route path='/PaymentConfOrder' element={<PaymentConfOrder/>}/>
      <Route path='/WishlistItemsNew' element={<WishlistItemsNew/>}/>
      <Route path='/WishlistItems' element={<WishlistItems/>}/>
      <Route path='/Product' element={<Product/>}>  
      <Route path=':ProductId' element={<Product/>}/>
      </Route>

      

    
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      </div>
    </>

  
  );
}

export default App;
