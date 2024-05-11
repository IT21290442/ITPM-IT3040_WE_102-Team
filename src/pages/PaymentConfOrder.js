import React, { useState } from 'react';
import './PaymentConfOrder.css'; 
import payment_img from './images/payment.jpg';

const PaymentConfOrder = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePaymentSuccess = () => {
    // Logic for processing payment success
    setShowPopup(true);
    // You can also add additional logic here, such as redirecting to another page after a delay
    // setTimeout(() => {
    //   history.push('/thank-you');
    // }, 3000); // Redirect after 3 seconds
  };

  return (
    <div>
      <h3>Connecting to e-banking ...</h3>
    

      <button className='p-button' onClick={handlePaymentSuccess}>Make Payment</button>
      <img className='image-p' src= {payment_img } alt=''></img>
    
      {showPopup && (
        <div className="payment-success-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handlePopupClose}>X</span>
            <h2>Payment Successful!</h2>
            <p>Your payment has been processed successfully. Thank you for your purchase!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentConfOrder;
