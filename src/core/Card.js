import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Thumbnail from "./helper/Thumbnail";
import { addItemToCart, getItemsFromCart } from "./helper/CartHelper";
const Card = ({ product }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let products = getItemsFromCart();
    if (products)
      if (products[product._id]) {
        setCount(products[product._id].count);
      }
  }, []);

  const onAddToCartClick = () => {
    setCount(count + 1);
    console.log(count);
    addItemToCart(product, count + 1);
  };

  const onRemoveCartClick = () => {
    if (count == 0) {
      return;
    }

    setCount(count - 1);
    addItemToCart(product, count);
  };

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
              onClick={onAddToCartClick}
              className="btn btn-block btn-success mt-2 mb-2"
            >
              Add to Cart ({count})
            </button>
          </div>
          <div className="col-12">
            <button
              onClick={onRemoveCartClick}
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
