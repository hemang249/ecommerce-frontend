import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminDashboard from "./user/AdminDashBoard";
import UserDashboard from "./user/UserDashBoard";
import Profile from "./user/Profile";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoute from "./auth/helper/AdminRoutes";
import Cart from "./core/Cart";
import Api from "./api-docs/Api";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/api-docs" exact component={Api} />
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/profile" exact component={Profile} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/user/cart" exact component={Cart} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
