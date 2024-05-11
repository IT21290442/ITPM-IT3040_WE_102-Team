import React, { useContext, useState } from 'react';
import './Navbar.css';

import logo from './assets/logo.png'
import cart_icon from './assets/cart icon.png';
import wishlist_icon from './assets/wishlist.png';
import profile_icon from './assets/profile.png';
import login_icon from './assets/login.jpg';
import signup_icon from './assets/signup.jpg';
import orders_icon from './assets/orders.jpg';
import '@fortawesome/fontawesome-free/css/all.css';


import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { WishlistContext } from '../context/WishlistContext';

export default function Navbar() {

      const [menu,setMenu]=useState("shop now");
      const {getTotalCartItems} = useContext(ShopContext)
      const {getTotalWishlistItems} = useContext(WishlistContext)
      const [open,setOpen] = useState(false);
      
   
      return (
    <div>

      
        <div className="navbar">
          <div className='nav-logo'>
            <img src={logo} alt=''/>
              {/*<p>Fashion Store</p>*/}
          </div>
          <ul className='nav-menu'>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mirror")}}>Mirror{menu==="mirror"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("echat")}}>e-Chat{menu==="echat"?<hr/>:<></>}</li>
          </ul>
          
          <div className='nav-login-cart'>
          
          <div class="box">
              <input type="text" placeholder="Search..."/> 
                <i class="fas fa-search"></i>
                 </div>
      

              <Link to='./Wishlist'><img className='wishlistlogo' src={wishlist_icon} alt=''/></Link>
              <div className='nav-wishlist-count'>{getTotalWishlistItems()}</div>
              
              <Link to='./Cart'><img className='cartlogo'src={cart_icon} alt=''/></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
                

                <div className='profile-container'>
                  <div className='profile-trigger' onClick={()=>{setOpen(!open)}}>
                   <img className='profilelogo' src={profile_icon} alt=''/>
                  </div>

                  <div className={`profile-dropdown-menu ${open ? 'active' : 'inactive'}`}>
                    <h3 className='h3navbar-profile'>LIMIT <br/><span>Customer Profile</span></h3>
                    <ul>
                      <DropdownItem img ={login_icon} text = {"Login"}/>
                      <DropdownItem img ={signup_icon} text = {"Signup"}/>
                      <DropdownItem img ={orders_icon} text = {"Orders"}/>
                    </ul>

                  </div>
                </div>

            
            
            
            
            {/* <div className="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit">Submit</button>
                </form>
      </div>*/}
  
          </div>
          
      

        </div>
  


    </div>

  )
function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  )
}

}
