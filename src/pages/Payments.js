import React from 'react';
import './Payments.css';
import { Navigate, useNavigate } from 'react-router-dom'


import img from '../components/assets/virtual3_img.jpg'

function Ratings() {
  const navigate = useNavigate()
  return (
    
    

      <div className="Payments">
<div className='dummy'>
<img src={img} alt=''></img>
</div>
<div className="container">
  <div className="title">Customer Delivery Details</div>
  <form action="#">
    <div className="user__details">
      <div className="input__box">
        <span className="details">Full Name</span>
        <input type="text" placeholder="fullname" required="" />
      </div>

      <div className="input__box">
        <span className="details">Full Name</span>
        <input type="text" placeholder="fullname" required="" />
      </div>
      <div className="input__box">
        <span className="details">Full Name</span>
        <input type="text" placeholder="fullname" required="" />
      </div>
      <div className="input__box">
        <span className="details">Full Name</span>
        <input type="text" placeholder="fullname" required="" />
      </div>

      
      <div className="input__box">
        <span className="details">Username</span>
        <input type="text" placeholder="user" required="" />
      </div>
      <div className="input__box">
        <span className="details">Email</span>
        <input type="email" placeholder="user@mail.com" required="" />
      </div>
      <div className="input__box">
        <span className="details">Phone Number</span>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="07x-xxx-xxxx"
          required=""
        />
      </div>
      <div className="input__box">
        <span className="details">Password</span>
        <input type="password" placeholder="********" required="" />
      </div>
      <div className="input__box">
        <span className="details">Confirm Password</span>
        <input type="password" placeholder="********" required="" />
      </div>
    </div>
    <div className="gender__details">
      <input type="radio" name="gender" id="dot-1" />
      <input type="radio" name="gender" id="dot-2" />
      <input type="radio" name="gender" id="dot-3" />
      <span className="gender__title">Payments</span>
      <div className="category">
        <label htmlFor="dot-1">
          <span className="dot one" />
          <span>Cash on Delivery</span>
        </label>
        <label htmlFor="dot-2">
          <span className="dot two" />
          <span>Card</span>
        </label>
        <label htmlFor="dot-3">
          <span className="dot three" />
          <span>Other Method</span>
        </label>
      </div>
    </div>
    <div className="button">
     <button  onClick={()=>navigate('/PaymentConfOrder')}>Proceed</button>
    </div>
  </form>
</div>




        
      </div>




     
  );
}

export default Ratings;
