import React from "react";

const AllPlans = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between container border">
      <h5 className="py-3">{props.order.name}</h5>
      <h5 className="py-3">{props.order.email}</h5>
      <h5 className="py-3">{props.order.address}</h5>
      <h5 className="py-3">{props.order.post}</h5>
      <h5 className="py-3 ">
        <form onSubmit={props.handleUpdate} className="all-form d-flex">
          <input type="text" ref={props.statusRef} value="Approved" />
          <button
            className="border-0 p-2 text-white bg-danger"
            // onClick={() => handleUpdate(order._id)}
          >
            Approve
          </button>
        </form>
      </h5>
      <h5>
        <button
          className="border-0 me-3 p-2 text-white bg-danger"
          //   onClick={() => handleDelete(order._id)}
        >
          Delete
        </button>
      </h5>
    </div>
  );
};

export default AllPlans;
