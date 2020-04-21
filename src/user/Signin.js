import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
const Signin = () => {
  const signInForm = () => {
    return (
      <div className="row  p-4">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="">Email</label>
              <input class="form-control" type="text"></input>
              <label className="">Password</label>
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
      <Base>{signInForm()}</Base>
    </div>
  );
};
export default Signin;
