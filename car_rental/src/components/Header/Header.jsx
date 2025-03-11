import React from 'react'

import { Container, Row, Col } from "reactstrap"
import { Link, NavLink } from 'react-router-dom'
import "../../styles/header.css"



const Header = () => {
    return <div>
        <header className="header">
            <div className="header-top">
                <nav className="nav">
                    <a href="index.html"><img src="img/logo.png" alt="RoadFlex" width="110px" /></a>
                    <div className="nav-links">
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/about'>ABOUT</Link></li>
                            <li><Link to='/cars'>CARS</Link></li>
                            <li><Link to='/contact'>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div className="credentials">
                        <ul>
                            <li><Link to='/register'><button id="credentials">Register</button></Link></li>
                            <li><Link to='/login'><button id="credentials">Login</button></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            
            

        </header>
    </div>
}

export default Header
