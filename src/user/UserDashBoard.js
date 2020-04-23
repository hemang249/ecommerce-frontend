import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { getAllOrders } from "./helper/userapicalls";
import { isAuthenticated } from "../auth/helper";

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = isAuthenticated();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllOrders(user._id, token)
      .then((data) => {
        console.log(data);
        setOrders(data.orders);

        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  const renderOrderList = () => {
    return orders.map((o) => (
      <div className="card">
        <div className="row p-4">
          <div className="col-md-12">
            <p className="card-text">
              <strong>Order ID </strong>: {o._id}
            </p>
            <p className="card-text">
              <strong>Date Ordered </strong>: {o.createdAt.substring(0, 10)}
            </p>

            <p className="card-text">
              <strong>Amount</strong> : ${o.amount}
            </p>
            <p className="card-text">
              <strong>TransactionId</strong>: {o.transactionId}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Base>
      <div className="fluid-container my-4">
        <h2 className="card-title text-center">Your Orders</h2>
        {loading && <div class="loader">Loading...</div>}
        {renderOrderList()}
      </div>
    </Base>
  );
};

export default UserDashboard;
