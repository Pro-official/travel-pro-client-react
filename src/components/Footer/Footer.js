import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Nav, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="container">
        <Row xs={1} sm={1} md={3} className="">
          <Col>
            <div className="f-container container">
              <div className="aboutus">
                <h2>About Us</h2>
                <p>
                  Travel For Pro is a travel agency aiming for the higher client
                  satisfaction. We will provide you with everything you want
                  during your traveling.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="f-container container">
              <h2>Internal Links</h2>
              <Nav className="d-flex flex-column">
                <Nav.Link className="link" as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link className="link" as={Link} to="/register">
                  Register / Login
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col>
            <div className="container">
              <h2>Contact Us</h2>
              <p>61/1 Chayataru, Lamabazar, Sylhet.</p>
              <p>+88 01750041145</p>
              <p>promise.iam00@gmail.com</p>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
      <p className="copyright">Copyright &copy; 2021, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
