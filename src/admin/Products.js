import React, { useState, useEffect } from "react";
import { getAllCategories, createProduct } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";

export default function Products() {
  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
    category: "",
    formData: new FormData(),
    loading: false,
  });

  const { user, token } = isAuthenticated();

  const {
    name,
    description,
    stock,
    price,
    category,
    formData,
    loading,
  } = values;

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = (name) => (event) => {
    const value =
      name === "thumbnail" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onCreateClick = (event) => {
    setValues({ ...values, loading: true });
    createProduct(user._id, token, formData)
      .then((data) => {
        setValues({
          name: "",
          description: "",
          price: 0,
          stock: 0,
          formData: "",
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  const createProductForm = () => {
    const renderCategories = () => {
      return categories.map((c) => (
        <option value={c._id}>{c.name.toUpperCase()}</option>
      ));
    };

    return (
      <div className="my-4 px-4">
        <h1 className="text-center">Create Product</h1>
        <form>
          <div className="form-group">
            <p className="lead"> Product Name</p>
            <input
              onChange={updateHandler("name")}
              value={name}
              type="text"
              className="form-control my-3 "
              required
              placeholder="Amazing T-Shirt"
            />
            <p className="lead"> Product Image</p>
            <input
              onChange={updateHandler("thumbnail")}
              type="file"
              className="form-control my-3 "
              required
            />
            <p className="lead"> Product Description </p>
            <input
              onChange={updateHandler("description")}
              value={description}
              type="text"
              className="form-control my-3 "
              required
              placeholder="Describe Your Product..."
            />
            <p className="lead">Price</p>
            <input
              onChange={updateHandler("price")}
              value={price}
              type="number"
              className="form-control my-3 "
              required
            />
            <p className="lead">Category</p>
            <select
              name=""
              id=""
              value={category}
              onChange={updateHandler("category")}
            >
              {renderCategories()}
            </select>
            <br />
            <p className="lead"> Stock</p>
            <input
              onChange={updateHandler("stock")}
              value={stock}
              type="number"
              className="form-control my-3 "
              required
            />
            <button onClick={onCreateClick} className="btn btn-outline-info">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {createProductForm()}
    </div>
  );
}
