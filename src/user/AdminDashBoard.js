import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import Categories from "../admin/Categories";
import Orders from "../admin/Orders";
import Products from "../admin/Products";

const AdminDashboard = () => {
  const {
    user: { email, firstName, role },
  } = isAuthenticated();

  const [rightPanelComponent, setRightPanelComponent] = useState("category");

  const handleNavigation = (name) => (event) => {
    setRightPanelComponent(name);
  };

  const adminLeft = () => {
    return (
      <div className="card admin-nav">
        <h4 className="card-header bg-warning">Admin Navigation</h4>
        <ul className="list-group">
          <li
            onClick={handleNavigation("category")}
            className="list-group-item"
          >
            Manage Categories
          </li>
          <li onClick={handleNavigation("order")} className="list-group-item">
            Manage Orders
          </li>
          <li onClick={handleNavigation("product")} className="list-group-item">
            Manage Products
          </li>
        </ul>
      </div>
    );
  };

  const adminRight = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header text-center">
          {rightPanelComponent.toUpperCase()}
        </h4>
        {rightPanelComponent === "category"
          ? Categories()
          : rightPanelComponent === "product"
          ? Products()
          : rightPanelComponent === "order"
          ? Orders()
          : null}
      </div>
    );
  };

  return (
    <Base>
      <div className="row container-fluid">
        <div className="col-3">{adminLeft()}</div>
        <div className="col-9">{adminRight()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
