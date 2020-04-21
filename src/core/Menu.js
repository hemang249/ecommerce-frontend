import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper/index";

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
          <Link className="nav-link text-white" to="/user/cart">
            Cart
          </Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/user/dashboard">
              Dashboard
            </Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/admin/dashboard">
              Admin
            </Link>
          </li>
        )}

        {isAuthenticated() && (
          <li onClick={signout} className="nav-item ">
            <Link className="nav-link text-white" to="/">
              Sign out
            </Link>
          </li>
        )}

        {isAuthenticated() === false ? (
          <Fragment>
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
          </Fragment>
        ) : null}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
