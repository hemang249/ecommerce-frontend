import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper/index";
import {
  deleteCategory,
  createCategory,
  getAllCategories,
} from "./helper/adminapicall";

export default function Categories() {
  const [name, setName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onCreateClick = (event) => {
    event.preventDefault();

    createCategory(user._id, token, name)
      .then((data) =>
        getAllCategories()
          .then((data) => setCategories(data))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  };

  const onDeleteCategory = (categoryId) => {
    deleteCategory(user._id, token, categoryId)
      .then((data) =>
        getAllCategories()
          .then((data) => setCategories(data))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  };

  const createCategoryForm = () => {
    return (
      <div className="my-4">
        <form>
          <div className="form-group">
            <p className="lead">Enter Category Name</p>
            <input
              type="text"
              className="form-control my-3 "
              required
              placeholder="Summer"
              value={name}
              onChange={handleChange}
            />
            <button onClick={onCreateClick} className="btn btn-outline-info">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  };

  const categoryList = () => {
    return categories.map((c) => (
      <li className="list-group-item">
        {" "}
        {c.name.toUpperCase()}
        <button
          onClick={() => onDeleteCategory(c._id)}
          className="btn btn-sm btn-danger mx-4"
        >
          Delete
        </button>{" "}
        <button className="btn btn-sm btn-warning mx-4">Update</button>{" "}
      </li>
    ));
  };

  return (
    <div className="bg-light rounded">
      <div className="col-md-8">
        <div>
          <p className="lead">All Catergories</p>
          <ul className="list-group">{categoryList()}</ul>
        </div>
        {createCategoryForm()}
      </div>
    </div>
  );
}
