import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import Body from '../Body/Body'

import '../../styles/hero-slider.css'

const HeroSlider = () => {

    const settings={
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1
    }
  return <div> <Slider {...settings} className="hero_slider">
    <div className="text-box slider_item slider_item-01 mt0">
        <Container>
            <div className="slider_content">
            <h1>Rent a car hassle-free</h1>
            <p>
                Our car rental system makes it easy for individuals and businesses to rent cars without any hassle
            </p>
            <a href="#" className="knowMore-btn">Visit Us To Know More</a>
            <button id="rentBtn">
                <Link to='/cars'>Rent Now</Link>
            </button>
            </div>
        </Container>
    </div>

    <div className="text-box slider_item slider_item-02 mt0">
        <Container>
            <div className="slider_content">
            <h1>Rent a car hassle-free</h1>
            <p>
                Our car rental system makes it easy for individuals and businesses to rent cars without any hassle
            </p>
            <a href="#" className="knowMore-btn">Visit Us To Know More</a>
            <button id="rentBtn">
                <Link to='/cars'>Rent Now</Link>
            </button>
            </div>
        </Container>
    </div> 

    <div className="text-box slider_item slider_item-03 mt0">
        <Container>
            <div className="slider_content">
            <h1>Rent a car hassle-free</h1>
            <p>
                Our car rental system makes it easy for individuals and businesses to rent cars without any hassle
            </p>
            <a href="#" className="knowMore-btn">Visit Us To Know More</a>
            <button id="rentBtn">
                <Link to='/cars'>Rent Now</Link>
            </button>
            </div>
        </Container>
    </div>
  </Slider>
  
  </div>
}

export default HeroSlider
