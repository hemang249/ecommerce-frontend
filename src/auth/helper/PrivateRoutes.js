import React, { Component } from "react";
import { isAuthenticated } from "./index";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathName: "/signin", from: props.location }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
