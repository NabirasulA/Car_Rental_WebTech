import React from 'react'

import { Container, Row,Col} from "reactstrap"
import { Link } from 'react-router-dom'
import "../../styles/body.css"
import HeroSlider from '../UI/HeroSlider'
import Helmet from '../Helmet/Helmet'

const Body = () => {
  return (
    <div>

    <main id="main" >
        <section className="introduction" id="intro-sec-1" >
          <img src="img/car_interior.jpg" alt="" className="image-1" />
          <div className="intro-heading" id="intro-id-1">
             <h2>Convenient online booking</h2>
             <p>With RoadFlex, you can conveniently book a car online from anywhere at any time.<br/> No more waiting in line at rental counters.</p>
            </div>
        </section>
        <section className="introduction" id="intro-sec-2">
          <img src="img/cars.jpg" alt=""  className="image-2" />
          <div className="intro-heading" id="intro-id-2">
            <h2>Wide selection of vehicles</h2>
            <p>We offer a wide selection of vehicles to choose from, ranging from compact cars <br/>to luxury vehicles. Find the perfect car for your needs.</p>
          </div>
        </section>
       <section className="introduction" id="intro-sec-3">
        <img src="img/car_nature.jpg" alt="" className="image-3" />
        <div className="intro-heading" id="intro-id-3">
        <h2>Flexible rental options</h2>
        <p>RoadFlex provides flexible rental options, whether you need a car for a few hours,<br/> a day, or even a month. Rent a car on your terms.</p>
        </div>
       </section>
        <section className="reviews">
               <h2 style={{color:'black'}}>What Our RoadFlexers Say</h2>
               <div className="row">
                    <div className="review-col">
                           <img src="img/Bella_Perez.png" alt="" />
                           <div><p>“RoadFlex made my car rental experience so easy and convenient. I will definitely use it again.”</p>
                            <h3>Bella Perez</h3>
                            <div id="star">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i></div>
                            </div>
                    </div>
                    <div className="review-col">
                        <img src="img/Leah Harris.png" alt="" />
                        <div><p>"The wide selection of cars available on RoadFlex allowed me to find the perfect car for my road trip. Highly recommended."</p>
                            <h3>Leah Harris</h3>
                            <div id="star">
                                <i class="fa fa-star" ></i>
                                <i class="fa fa-star" ></i>
                                <i class="fa fa-star" ></i>
                                <i class="fa fa-star" ></i>
                                <i class="fa fa-star" ></i></div>
                          </div>
                    </div>
                    <div className="review-col">
                           <img src="img/J.David.jpg" alt="" />
                           <div>
                           <p>"The selection of car from RoadFlex gave me a flexible journey. Thanks."</p>
                           <h3>J.David</h3>
                           <div id="star">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i></div>
                          </div>
                    </div>
               </div>
        </section>
      </main>  
    </div>
  )
}

export default Body
