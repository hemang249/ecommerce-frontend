import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base.jsx";
import Card from "./Card";
import { getAllProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const renderCardList = () => {
    let content = [];
    let len = products.length;
    let iterations = Math.ceil(len / 3);
    console.log(iterations);
    for (let i = 0; i < iterations; i++) {
      content.push(
        <div className="row">
          <div className="col-md-4">
            <Card product={products[3 * i + 0]} />
          </div>
          <div className="col-md-4">
            <Card product={products[3 * i + 1]} />
          </div>
          <div className="col-md-4">
            <Card product={products[3 * i + 2]} />
          </div>
        </div>
      );
    }

    return <div>{content}</div>;
  };

  return <Base showHeader={true}>{renderCardList()}</Base>;
}
