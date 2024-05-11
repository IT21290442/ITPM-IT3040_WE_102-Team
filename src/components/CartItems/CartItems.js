import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import Remove_icon from '../assets/remove.gif';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const navigate = useNavigate();
    const { getTotalCartAmount, ShopProducts, cartItems, removeFromCart } = useContext(ShopContext);

    const printCartTotals = () => {
        // Logic to print cart totals
        window.print();
    };
    

    return (
        <div className='cartItems'>
            
             <button onClick={printCartTotals}>E-bill <br/>Click Here</button>
            <div className='cartItems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {ShopProducts.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartItems-format cartItems-format-main'>
                                <img src={e.image} alt='' className='cartIcon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs.{e.price}.00</p>
                                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs.{e.price * cartItems[e.id]}.00</p>
                                <img src={Remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartItems-down'>
                <div className='cartItems-total'>
                    <h1>Cart Totals</h1>
                </div>
                <div className='cartItems-total-items'>
                    <p>Sub Total</p>
                    <p>Rs.{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartItems-total-items'>
                    <p>Delivery Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartItems-total-items-last-Total'>
                    <h3>Total</h3>
                    <h3>Rs.{getTotalCartAmount()}.00</h3>
                </div>

                <button onClick={() => navigate('/Payments')}>Proceed to checkout</button><br></br>
                <button onClick={() => navigate('/')}>Continue Shopping</button>

               
            </div>

            <div className='cartItem-promoCode'>
                <p>Enter your Promo Code</p>
                <div className='cartItems-promoBox'>
                    <input type='text' placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>

        </div>
    );
};

export default CartItems;
