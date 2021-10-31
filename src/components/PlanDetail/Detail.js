import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import "./Detail.css";
import useAuth from "./../../hooks/useAuth";

const Detail = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const postRef = useRef();
  const addressRef = useRef();
  const statusRef = useRef();
  const describeRef = useRef();

  useEffect(() => {
    fetch(`https://ghastly-skull-33120.herokuapp.com/plans/${id}`)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);

  const handleSubmit = (e) => {
    console.log("Hi");
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const status = statusRef.current.value;
    const post = postRef.current.value;
    const describe = describeRef.current.value;

    const newPlan = { name, email, address, post, describe, status };

    fetch("https://ghastly-skull-33120.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlan),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Plan Added Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className=" individual">
      <h1>Place Your Order</h1>
      <form className="detail-form" onSubmit={handleSubmit}>
        <input
          className="mb-2"
          type="text"
          ref={nameRef}
          value={user?.displayName}
        />
        <input
          className="mb-2"
          type="email"
          name=""
          id=""
          ref={emailRef}
          value={user?.email}
        />
        <input
          className="mb-2"
          type="text"
          ref={addressRef}
          placeholder="Your address"
          required
        />
        <input
          className="mb-2"
          type="text"
          ref={statusRef}
          value="Pending"
          required
        />
        <input className="mb-2" type="text" ref={postRef} value={plan?.name} />
        <textarea
          className="mb-2"
          type="text"
          ref={describeRef}
          value={plan?.describe}
        />
        <input className="submit-button" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Detail;
