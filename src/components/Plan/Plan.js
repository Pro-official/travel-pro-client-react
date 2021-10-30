import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Plan.css";

const Plan = ({ plan }) => {
  const { _id, name, describe, price, img } = plan;
  return (
    <div>
      <Col className="plan">
        <Card>
          <img className="plan-image" src={img} alt="country img" />
          <div className="planDetail-text">
            <div className="d-flex justify-content-between container mt-3">
              <h1>{name}</h1>
              <small>${price}</small>
            </div>
            <p>{describe}</p>
          </div>

          <div className="details-footer d-flex justify-content-between">
            <div>
              <p>13 Days</p>
            </div>
            <Link to={`/plans/${_id}`}>
              <button className="details-button">Book Now</button>
            </Link>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Plan;
