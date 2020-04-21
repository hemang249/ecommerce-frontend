import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const updateHandler = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,

              email: "",
              password: "",
              error: false,
              loading: false,
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const redirect = () => {
    if (didRedirect) {
      if (isAuthenticated() && isAuthenticated().user.role == 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
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
        Incorrect Email or Password <i className="fas fa-wrong"></i>
        <br />
        Please Try Again Later!
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row  p-4">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="">Email</label>
              <input
                name="email"
                onChange={updateHandler("email")}
                value={email}
                class="form-control"
                type="text"
              ></input>
              <label className="">Password</label>
              <input
                name="password"
                onChange={updateHandler("password")}
                value={password}
                type="password"
                class="form-control"
              ></input>
              <button
                onClick={onSubmit}
                className="btn btn-success btn-block my-4"
              >
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
      <Base>
        {error ? onError() : null}
        {redirect()}
        {signInForm()}
      </Base>
    </div>
  );
};
export default Signin;
