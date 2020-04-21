import React from "react";
import Menu from "./Menu";

const Base = (props) => {
  const title = "C0DERS";
  const description = "We are a clothing store for geeks to top up their swag.";
  const className = "p-4";
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        {props.showHeader && (
          <div className="jumbotron text-center">
            <h2 className="display-6">{title}</h2>
            <p className="lead">{description}</p>
          </div>
        )}

        <div className={className}>{props.children}</div>
      </div>

      {/* <footer className="footer  mt-auto py-3">
        <div className="container-fluid bg-success py-3 text-center">
          <h4>Got any questions ? Reach out to us</h4>
          <button className="btn btn-warning btn-lg">Contact us</button>
        </div>
      </footer> */}
    </div>
  );
};

export default Base;
