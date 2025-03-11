// App.jsx

import React, { useState } from 'react';
import '../styles/payment.css'
import CreditCard from './CreditCard';
import Upi from './Upi';
import NetBanking from './Netbanking';
import {useNavigate} from "react-router-dom"
function Payment() {

  const [paymentMethod, setPaymentMethod] = useState('display');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const car=localStorage.getItem('carName');
  const price = localStorage.getItem('TotalPrice'); // Retrieve the price from local storage

  const navigate = useNavigate();
  const handlesubmit=()=>{
    alert("Payment Successful");
    navigate('/')
  }

  return (
    <div className='container'>
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>
            <div className="inputBox">
              <span>Full Name:</span>
              <input type="text" placeholder="Enter your name" name="full_name" />
            </div>
            <div className="inputBox">
              <span>Email:</span>
              <input type="email" placeholder="example9@gmail.com" name="email" />
            </div>
            <div className="inputBox">
              <span>Address:</span>
              <input type="text" placeholder="Room - Street - Locality" name="address" />
            </div>
            <div className="inputBox">
              <span>City:</span>
              <input type="text" placeholder="City" name="city" />
            </div>
            <div className="inputBox">
              <span>State:</span>
              <select className="state">
                <option value="select">--Select--</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Karnataka">Karnataka</option>

                {/* ... (Rest of the state options) */}
              </select>
            </div>
            <div className="inputBox">
              <span>Zip Code:</span>
              <input type="text" placeholder="123 456" name="zip_code" />
            </div>
          </div>
          <div className="col">
            <h3 className="title">Payment</h3>
            <div className='carName'>Selected Car: {car}</div>
            <div className="price">Price: ₹{price}</div>
            <div className="inputBox">
              <h4>Payment Method:</h4>
              <select className='payment' onChange={handlePaymentMethodChange} value={paymentMethod}>
                <option value="display">---Select---</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            {paymentMethod === 'card' && <CreditCard />}
            {paymentMethod == 'upi' && <Upi price={price}/>}
            {paymentMethod === 'netbanking' && <NetBanking />}

           <input type="submit" className="submit-btn" value="Proceed to Checkout" onClick={handlesubmit} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;