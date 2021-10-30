import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();

  const [plan, setPlan] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/plans/${id}`)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);

  const imgStyle = {
    width: "70%",
  };

  return (
    <div className=" individual">
      <h1>{plan?.name}</h1>
      <img style={imgStyle} src={plan?.img} alt="" />
      <p className="mt-4">Description: {plan?.describe}</p>
    </div>
  );
};

export default Detail;
