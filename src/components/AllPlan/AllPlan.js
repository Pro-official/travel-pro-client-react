import React, { useState, useEffect } from "react";

const AllPlan = () => {
  const [orders, setOrders] = useState([]);
  // const [deleted, setDeleted] = useState(null);
  useEffect(() => {
    fetch("https://ghastly-skull-33120.herokuapp.com/orders/")
      .then((res) => res.json())
      .then((data) => setOrders(data));
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
            const remainingPlans = orders.filter((order) => order._id !== id);
            setOrders(remainingPlans);
          }
        });
    }
  };

  return (
    <div>
      <div className="text-center my-4">
        <h1>All Plans Ordered by Everyone</h1>
        <h5>
          To change a plans status from pending to approved, please select
          approved option bellow and click in Approve button.
        </h5>
      </div>
      {orders.map((order) => (
        <div className="d-flex align-items-center justify-content-between container border">
          {" "}
          <h5 className="py-3">{order.name}</h5>
          <h5 className="py-3">{order.email}</h5>
          <h5 className="py-3">{order.address}</h5>
          <h5 className="py-3">{order.post}</h5>
          <h5>
            <button
              className="border-0 me-3 p-2 text-white bg-danger"
              onClick={() => handleDelete(order._id)}
            >
              Delete
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default AllPlan;
