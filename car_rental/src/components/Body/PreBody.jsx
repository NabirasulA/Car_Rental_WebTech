import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/prebody.css'


function PreBody() {
  return (
    
            <div className="Hero-section">
                <div className="text-box">
                    <h1>Rent a car hassle-free</h1>
                    <p>
                        Our car rental system makes it easy for individuals and businesses to rent cars without any hassle
                    </p>
                    <div className='inline-block'>
                    <a href="#" class="knowMore-btn">Visit Us To Know More</a>
                    <Link to='/cars'>
                        <button id="rentBtn">Rent Now</button>
                    </Link>
                    </div>
                </div>
            </div> 
    
  )
}

export default PreBody
