import React, { useState, useEffect } from "react";
import "./MyPlan.css";
import useAuth from "./../../hooks/useAuth";

const Myplan = () => {
  const [myPlans, setMyPlans] = useState([]);
  const { user } = useAuth();
  const userEmail = user.email;
  // const { email } = useParams();

  useEffect(() => {
    fetch(`https://ghastly-skull-33120.herokuapp.com/orders/`)
      .then((res) => res.json())
      .then((data) => setMyPlans(data));
  }, []);

  const handleDelete = (id) => {
    const sure = window.confirm("Do you want to delete this plan? ");
    if (sure) {
      fetch(`https://ghastly-skull-33120.herokuapp.com/devplan/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingPlans = myPlans.filter((order) => order._id !== id);
            setMyPlans(remainingPlans);
          }
        });
    }
  };

  return (
    <div>
      <div className="text-center my-4">
        <h1>All my plans...</h1>
      </div>
      <div>
        {myPlans
          .filter((myPlan) => myPlan.email === userEmail)
          .map((newPlan) => (
            <div className="d-flex align-items-center justify-content-between container border">
              {" "}
              <h5 className="py-3">{newPlan.name}</h5>
              <h5 className="py-3">{newPlan.email}</h5>
              <h5 className="py-3">{newPlan.address}</h5>
              <h5 className="py-3">{newPlan.post}</h5>
              <div>
                <button
                  className="border-0 me-3 p-2 text-white bg-danger delete-button"
                  onClick={() => handleDelete(newPlan._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Myplan;
