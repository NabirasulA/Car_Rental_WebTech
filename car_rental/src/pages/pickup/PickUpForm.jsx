

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PickupForm.css';
import Payment from '../../payment/payment';

const PickupForm = () => {
    const [pickupDate, setPickupDate] = useState(new Date());
    const [pickupTime, setPickupTime] = useState('');
    const [dropDate, setDropDate] = useState(new Date());
    const [dropTime, setDropTime] = useState('');
    const car = localStorage.getItem('carName');
  
    // Hardcoded price per day
    const price =  localStorage.getItem('productPrice'); ;
  
    const calculateTotal = () => {
      const days = calculateDays(pickupDate, dropDate);
      const totalPrice = days * price;
      console.log(`Total price: ${totalPrice}`);
      localStorage.setItem('TotalPrice', totalPrice);
      window.location.href="/payment";
    };
  
    const calculateDays = (pickupDate, dropDate) => {
      const startDate = new Date(pickupDate);
      const endDate = new Date(dropDate);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return days;
    };
  
    return (
      
      <div className="pickup-form">
        <div>
          <div className="company">Roadflex</div>
          <div className="my-2.5">Selected Car:{car}</div>
          <label>Pickup Location:</label>
          <select className="some">
            <option>--select--</option>
            <option>banaglore</option>
            <option>mysore</option>
            <option>mangalore</option>
            <option>tumkur</option>
            <option>davanagere</option>
          </select>
        </div>
  
        <div>
          <label>Date of Pickup:</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            dateFormat="MMMM d, yyyy"
            className="mb-2"
          />
          <label>Time of Pickup:</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="h:mm aa"
            className="mb-4"
          />
        </div>
  
        <div>
          <label>Drop Location:</label>
          <select className="some">
            <option>--select--</option>
            <option>banaglore</option>
            <option>mysore</option>
            <option>mangalore</option>
            <option>tumkur</option>
            <option>davanagere</option>
          </select>
        </div>
  
        <div>
          <label>Date of Drop:</label>
          <DatePicker
            selected={dropDate}
            onChange={(date) => setDropDate(date)}
            dateFormat="MMMM d, yyyy"
            className="mb-2"
          />
          <label>Time of Drop:</label>
          <DatePicker
            selected={dropDate}
            onChange={(date) => setDropDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="h:mm aa"
            className="mb-4"
          />
  
        </div>
  
        <button id="book" className="my-2.5" onClick={() => {
          calculateTotal();
        
        }}>
          Book
        </button>
      </div>
      
    );
  };
  
export default PickupForm;
  
