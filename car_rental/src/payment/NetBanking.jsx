// NetBanking.jsx

import React from 'react';

const NetBanking = () => {
  return (
    <>
      <div className="inputBox netbanking-details">
        <span>Select Bank:</span>
        <select className="netbank">
          <option value="bank1">State bank of india</option>
          <option value="bank2">canara bank</option>
          <option value="bank3">bank of baroda</option>
        </select>

        <span>Account Number:</span>
        <input type="text" placeholder="Enter your account number" name="netbanking_account_number" />

        <span>Password or PIN:</span>
        <input type="password" placeholder="Enter your password or PIN" name="netbanking_password" />

        <button type="submit">Proceed to Payment</button>
      </div>
      </>
  );
};

export default NetBanking;