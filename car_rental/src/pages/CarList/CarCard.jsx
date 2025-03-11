import React from 'react'
import './carCard.css'
import { Link } from 'react-router-dom';
import Payment from '../../payment/payment';
import PickUpForm from '../pickup/PickUpForm';

const CarCard = ({ carApi }) => {

 
  return (
    <div className="grid-container">
      {carApi.map((curElem, index) => (
        <div className="card-content" key={index}>
          <h1 className="inline-flex items-center my-4">{curElem.carName}</h1>
          <img src={curElem.image} alt=""/>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?</p>
          {/* <div className="tags">
            <span>#Sneakers</span>
            <span>#Nike</span>
            <span>#Airmax</span>
          </div> */}
          {/* <div className="colors">
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
          </div> */}
          <div className="size">
            <span className="block cursor-pointer">{curElem.fuelType}</span>
            <span className="block cursor-pointer">Rs{curElem.price}</span>
            <span className="block cursor-pointer">{curElem.rentalPeriod}</span>
          </div>
          <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              localStorage.setItem('carName', curElem.carName);
              localStorage.setItem('productPrice', curElem.price);
              window.location.href='/pickup';
            }}>Rent</button>
        </div>
      ))}
    </div>
  );
}

export default CarCard;





