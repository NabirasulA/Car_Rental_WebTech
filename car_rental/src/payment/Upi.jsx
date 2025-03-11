// Upi.jsx

import React from 'react';

const Upi = ({price}) => {
  return (
    <div className="inputBox upi-details">
      <span>Amount (in Rs):</span>
      <div>{price}</div>

      <span>Customer Name:</span>
      <input type="text" placeholder="Customer Name" name="upi_customer_name" />

      <span>Customer Email:</span>
      <input type="email" placeholder="Customer Email" name="upi_customer_email" />

      <span>UPI ID:</span>
      <input type="text" placeholder="Enter UPI ID" name="upi_id" />

      <span>Select Payment Method:</span>
      <select className="upi">
        <option value="UPI">UPI</option>
        <option value="paytm">Paytm</option>
        <option value="google-pay">Google Pay</option>
        <option value="phonepe">PhonePe</option>
      </select>

      <div className="payment-methods">
        <img src="img.jpg/paytm.ht.jpg" alt="Paytm" />
        <img src="img.jpg/gpay.ht.jpg" alt="Google Pay" />
        <img src="img.jpg/phonepay.ht.jpg" alt="PhonePe" />
      </div>

      <button type="submit">Pay</button>
    </div>
  );
};

export default Upi;