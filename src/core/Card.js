import React from "react";
import Thumbnail from "./helper/Thumbnail";
const Card = ({ product }) => {
  return (
    <div className="card text-white bg-primary border border-info my-4 ">
      <div className="card-header lead">{product.name}</div>
      <div className="card-body">
        <Thumbnail product={product} />
        <p className="lead  font-weight-normal text-wrap">
          {product.description}
        </p>
        <p className="btn btn-warning rounded  btn-sm px-4">
          $ {product.price}
        </p>
        <p className="btn btn-warning rounded  btn-sm px-4 mx-4">
          {product.category.name.toUpperCase()}
        </p>
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
