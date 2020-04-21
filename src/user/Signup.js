import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
const Signup = () => {
  const signUpForm = () => {
    return (
      <div className="row bg-primary p-4">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">First Name</label>
              <input class="form-control" type="text"></input>
              <label className="text-light">Last Name</label>
              <input type="text" class="form-control"></input>
              <label className="text-light">Email</label>
              <input type="text" class="form-control"></input>
              <label className="text-light">Password</label>
              <input type="password" class="form-control"></input>
              <button className="btn btn-success btn-block my-4">
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Base>{signUpForm()}</Base>
    </div>
  );
};
export default Signup;
