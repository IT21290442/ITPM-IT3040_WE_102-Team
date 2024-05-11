import React, { useContext } from 'react'
import './WishlistItems.css'
import { WishlistContext } from '../../context/WishlistContext'
import Remove_icon from '../assets/remove.gif'
import { useNavigate } from 'react-router-dom'



const WishlistItems = (props) => {
        
    const navigate = useNavigate()
    
    const  {wishlistItems,ShopProducts,removeFromWishlist,addToCart} = useContext(WishlistContext)
  return (
    <div className='cartItems'>
        <div className='cartItems-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
       {ShopProducts.map ((e)=>{

            if(wishlistItems[e.id]>0)
            {
                return <div>
                <div className='cartItems-format cartItems-format-main'>
                    <img src={e.image} alt="" className='cartIcon-product-icon'/>
                    <p>{e.name}</p>
                    <p>Rs.{e.price}.00</p>
                    <button className='cartItems-quantity'>{wishlistItems[e.id]}</button>
                    <p>Rs.{e.price*wishlistItems[e.id]}.00</p>
                    <img src={Remove_icon} onClick={()=>{removeFromWishlist(e.id)}} alt=''/>
                </div>
                <hr/>
            </div> 
            }
            return null;
       })}
       
    
  
       
       
        <button on onClick={()=>navigate('/')}>Continue Shopping </button><br/> <br/>
        <button onClick={()=>navigate('/Cart')}>Add To Cart</button>
        
    
    
        </div>

    )
}

export default WishlistItems