// CreditCard.jsx

import React from 'react';

const CreditCard = () => {
  return (
    <div className="inputBox card-details">
      <span>Name on Card:</span>
      <input type="text" placeholder="Enter the cardholder's name" name="cardholder_name" />

      <span>Credit Card Number:</span>
      <input type="text" placeholder="Enter the card number" name="card_number" maxLength="16" />

      <div className="flex">
        <div className="inputBox">
          <span>Expiration Date:</span>
          <div className="exp">
            <div className="month">
              <select className="card_expiration_month">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <select className="card_expiration_month">
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
        </div>
        <div className="inputBox">
          <span>CVV:</span>
          <input type="password" placeholder="123" name="card_cvv" maxLength="3" minLength="3" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;