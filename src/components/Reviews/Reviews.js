import React from "react";
import { Carousel } from "react-bootstrap";
import review from "../../image/review.jpg";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="review text-center">
      <div className="text-center pt-5">
        <h1>Best Reviews</h1>
        <p>This is by far one of the great achievements of our company life.</p>
      </div>
      <Carousel>
        <Carousel.Item className="text-center">
          <img
            className="d-block carousel-img w-100"
            src={review}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-text">
            <h3>Prianka Chopra</h3>
            <p>
              I have been looking for a great travel company last couple of
              months to help me in visiting Rome, Italy. When, I got to know
              about "Travel Pro" I started to make contact with them. God
              know's, I didn't make any bad choice. You guys are the best.
            </p>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img
            className="d-block w-100 carousel-img"
            src={review}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3>Promise Ghosh Chowdhury</h3>
            <p>
              I have been looking for a great travel company last couple of
              months to help me in visiting Rome, Italy. When, I got to know
              about "Travel Pro" I started to make contact with them. God
              know's, I didn't make any bad choice. You guys are the best.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={review}
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3>Aysh Rai</h3>
            <p>
              I have been looking for a great travel company last couple of
              months to help me in visiting Rome, Italy. When, I got to know
              about "Travel Pro" I started to make contact with them. God
              know's, I didn't make any bad choice. You guys are the best.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
    </div>
  );
};

export default Reviews;
