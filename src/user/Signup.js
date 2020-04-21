import React, { useState } from "react";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";
const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    lastName: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, firstName, lastName, password, error, success } = values;

  const updateHandler = (name) => (event) => {
    console.log("update");
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(values);
  };

  const onSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstName, lastName, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const signUpForm = () => {
    return (
      <div className="row bg-primary p-4">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">First Name</label>
              <input
                name="firstName"
                onChange={updateHandler("firstName")}
                className="form-control"
                type="text"
                value={firstName}
              ></input>
              <label className="text-light">Last Name</label>
              <input
                name="lastName"
                onChange={updateHandler("lastName")}
                type="text"
                className="form-control"
                value={lastName}
              ></input>
              <label className="text-light">Email</label>
              <input
                name="email"
                onChange={updateHandler("email")}
                type="text"
                className="form-control"
                value={email}
              ></input>
              <label className="text-light">Password</label>
              <input
                name="password"
                onChange={updateHandler("password")}
                type="password"
                className="form-control"
                value={password}
              ></input>
              <button
                onClick={onSubmit}
                className="btn btn-success btn-block my-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const onSuccess = () => {
    return (
      <div className="alert text-center alert-success">
        Registration successfull <i className="fas fa-check"></i>
        <br />
        To Login Click here : <Link to="/signin">Sign In</Link>
      </div>
    );
  };

  const onError = () => {
    return (
      <div className="alert text-center alert-danger">
        Registration Failed <i className="fas fa-wrong"></i>
        <br />
        Please Try Again Later!
      </div>
    );
  };

  return (
    <div>
      <Base>
        {success ? onSuccess() : null}
        {error ? onError() : null}
        {signUpForm()}
      </Base>
    </div>
  );
};
export default Signup;
