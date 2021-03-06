import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base.jsx";
import Card from "./Card";
import { getAllProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderCardList = () => {
    let content = [];
    let len = products.length;

    let iterations = Math.ceil(len / 3);
    for (let i = 0; i < iterations; i++) {
      content.push(
        <div className="row">
          {products[3 * i] && (
            <div className="col-md-4">
              <Card product={products[3 * i + 0]} />
            </div>
          )}
          {products[3 * i + 1] && (
            <div className="col-md-4">
              <Card product={products[3 * i + 1]} />
            </div>
          )}
          {products[3 * i + 2] && (
            <div className="col-md-4">
              <Card product={products[3 * i + 2]} />
            </div>
          )}
        </div>
      );
    }

    return <div>{content}</div>;
  };

  return (
    <Base showHeader={true}>
      <div className="text-center">
        {loading && <div class="loader">Loading...</div>}
      </div>
      {renderCardList()}
    </Base>
  );
}
