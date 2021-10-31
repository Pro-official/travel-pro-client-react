import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Gellary.css";
import sunset from "../../image/sunset.jpg";
import animal from "../../image/animal.jpg";
import building from "../../image/building.jpg";
import city from "../../image/city.jpg";
import forest from "../../image/forest.jpg";
import night from "../../image/night.jpg";
import river from "../../image/river.jpg";

const Gellary = () => {
  return (
    <div className="text-center py-5 gallery">
      <div className="mb-5 gallery-text">
        <h1>Here's Our Most Gorgeous Photo Gallery </h1>
        <p>
          Watch enjoy this beautiful pictures taken by our guides or our
          beautiful clients. You can too take this amazing pictures with you own
          hand. What you have to do is just place your order.{" "}
        </p>
      </div>
      <Container className="container gellary-img">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="mb-4">
          <Col xs={12} md={8}>
            <img className="gellary-img" src={sunset} alt="" />
          </Col>
          <Col xs={6} md={4}>
            <img className="gellary-img" src={animal} alt="" />
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className="mb-4">
          <Col xs={6} md={4}>
            <img className="gellary-img" src={building} alt="" />
          </Col>
          <Col xs={6} md={4}>
            <img className="gellary-img" src={city} alt="" />
          </Col>
          <Col xs={6} md={4}>
            <img className="gellary-img" src={forest} alt="" />
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row className="mb-4">
          <Col xs={6}>
            <img className="gellary-img" src={night} alt="" />
          </Col>
          <Col xs={6}>
            <img className="gellary-img" src={river} alt="" />
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Gellary;
