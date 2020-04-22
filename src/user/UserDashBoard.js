import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { getAllOrders } from "./helper/userapicalls";
import { isAuthenticated } from "../auth/helper";

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = isAuthenticated();
  useEffect(() => {
    getAllOrders(user._id, token)
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <Base>User dashbaord</Base>;
};

export default UserDashboard;
