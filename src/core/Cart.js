import React, { Fragment, useState, useEffect } from "react";
import { getItemsFromCart, createOrder } from "./helper/CartHelper";
import Base from "./Base";
import Card from "./Card";
import { Redirect } from "react-router-dom";
import Stripe from "react-stripe-checkout";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { API, STRIPE_KEY } from "../config";

export default function Cart() {
  const [productsInCart, setProductsInCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setProductsInCart(getItemsFromCart());
  }, []);

  useEffect(() => {
    setTotal(computeTotal());
  }, [productsInCart]);

  const computeTotal = () => {
    let myTotal = 0;
    if (productsInCart)
      Object.entries(productsInCart).forEach(([key, value]) => {
        myTotal += value.count * value.product.price;
      });
    return myTotal;
  };

  const renderCartItems = () => {
    const content = [];
    if (productsInCart)
      Object.entries(productsInCart).forEach(([key, value]) => {
        content.push(<Card product={value.product} />);
      });
    return <Fragment>{content}</Fragment>;
  };

  const makePayment = (token) => {
    setLoading(true);
    setAddress({
      city: token.card.address_city,
      street: token.card.address_line1,
      country: token.card.address_country,
    });
    const body = {
      token,
      amount: total * 100,
    };

    const headers = {
      "Content-type": "application/json",
    };

    fetch(`${API}/stripe`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        createOrder(
          isAuthenticated().user._id,
          isAuthenticated().token,
          total,
          address
        ).then((data) => {
          console.log(data);
          localStorage.removeItem("cart");
          setLoading(false);
          setSuccess(true);
        });
      })
      .catch((err) => console.log(err));
  };

  const renderProductInvoice = () => {
    const content = [];
    let i = 1;
    let myTotal = 0;
    if (productsInCart)
      Object.entries(productsInCart).forEach(([key, value]) => {
        myTotal += value.count * value.product.price;
        content.push(
          <tr>
            <th scope="row">{i++}</th>
            <td>{value.product.name}</td>
            <td>{value.count}</td>
            <td>$ {value.product.price * value.count}</td>
          </tr>
        );
      });
    return <Fragment>{content}</Fragment>;
  };

  const renderCheckout = () => {
    return (
      <div class="card p-4 my-4 " style={{ width: "800px" }}>
        <h4 className="text-center text-success">
          Thank You For Shopping With Us
        </h4>
        <h5 className="text-center text-dark">
          Your Products will be delivered within 3 working days.
        </h5>
        <div class="card-body">
          <h5 class="card-title">Invoice</h5>
        </div>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Net Amount</th>
            </tr>
          </thead>
          <tbody>
            {renderProductInvoice()}

            <tr>
              <th scope="col">
                <strong>TOTAL AMOUNT : </strong>
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">$ {total}</th>
            </tr>
          </tbody>
        </table>

        <div class="card-body text-center">
          {isAuthenticated() ? (
            <>
              <Stripe
                name="C0DERS Clothing"
                stripeKey="pk_test_E1j6fsqMDJg1nJUWBS4O6kVN00Ml4rt39d"
                shippingAddress
                billingAddress
                token={makePayment}
              >
                <button className="btn btn-success btn-lg">
                  Proceed To Pay ($ {total})
                </button>
              </Stripe>
              {loading && (
                <div>
                  <p>Please Do not Exit, Your transaction is in process...</p>
                  <div class="loader"></div>
                </div>
              )}
            </>
          ) : (
            <div>
              <Link to="/signin">
                <button className="btn btn-warning btn-lg">Login</button>
              </Link>
              <p className="text-info">
                You Must be logged in to place an order
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Base showHeader={false}>
      {success ? <Redirect to="/" /> : null}
      <h1 className="text-center my-4">Your Cart</h1>
      <div className="row">
        <div className="col-md-4">{renderCartItems()}</div>

        <div className="col-md-4">{renderCheckout()}</div>
      </div>
    </Base>
  );
}
