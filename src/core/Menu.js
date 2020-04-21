import React from "react";
import { withRouter, Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="nav bg-primary text-white nav-tabs">
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/">
            Cart
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/">
            A. Dashboard
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/signin">
            Login
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="/signup">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
