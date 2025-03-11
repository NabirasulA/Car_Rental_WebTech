

import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"
import '../../styles/footer.css'

const quickLinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        {/* <Col lg='4' md='4' sm='12'> */}
          <div className="logo">
            <h5>
              <Link to="/home" className="d-flex align-items-center gap-2">
                <span style={{ color: 'black' }}>
                  RoadFlex
                </span>
              </Link>
            </h5>
          </div>
          <div className="footer_logo-content">
            <p style={{ color: 'black' }}>At RoadFlex, we are passionate about providing you with the ultimate freedom to explore the world<br /> at your own pace. Whether you're a traveler seeking adventure, a business professional on the go, <br />or just in need of a reliable set of wheels for your daily commute, RoadFlex has you covered.</p>
            <div className="icons">
              <i class="fa fa-facebook" ></i>
              <i class="fa fa-twitter" ></i>
              <i class="fa fa-instagram" ></i>
              <i class="fa fa-linkedin" ></i>
            </div>
          </div>
        {/* </Col> */}

        {/* <Col lg='4' md='4' sm='6' > */}
          <div className="mb-4">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        {/* </Col> */}

        {/* <Col lg='3' md='4' sm='6'> */}
          <div className="mb-4 office_details">
            <h5 className="footer_link-title">Head Office</h5>
            <p className="officee_info">Bengaluru</p>
            <p className="officee_info">Phone: +09938477656</p>
            <p className="officee_info">Email: roadflex@gmail.com</p>
            <p className="officee_info">Office Time: 10am - 7pm </p>
          </div>
        {/* </Col> */}


      </Row>
    </Container>
  </footer>
}

export default Footer
