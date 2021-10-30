import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Plan from "../Plan/Plan";
import "./Plans.css";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/plans`)
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div className="plans">
      <hr />
      <div className="plan-text">
        <h1>Our Plans</h1>
        <p>
          Explore our most exclusive plans for you! We cover six best countries
          to visit. We can provide you with local guide, hotels, rent a car
          service, food, tickets and what not! Travel to the amazing cities of
          this beautiful countries.{" "}
        </p>
        <hr />
      </div>
      <div className="details">
        <Row xs={1} md={3} className="g-4 ms-auto me-auto mt-2">
          {plans.map((plan) => (
            <Plan key={plan._id} plan={plan}></Plan>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Plans;
