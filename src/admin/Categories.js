import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper/index";
import {
  deleteCategory,
  createCategory,
  getAllCategories,
  updateCategory,
} from "./helper/adminapicall";

export default function Categories() {
  const [name, setName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [categories, setCategories] = useState([]);
  const [toBeUpdated, setToBeUpdated] = useState(false);
  const [categoryToBeUpdated, setCategoryToBeUpdated] = useState(null);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const createUpdateHandler = (event) => {
    setName(event.target.value);
  };

  const updateUpdateHandler = (event) => {
    setUpdatedName(event.target.value);
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

  const onUpdateClick = (event) => {
    event.preventDefault();
    console.log(categoryToBeUpdated);
    updateCategory(user._id, token, categoryToBeUpdated, name)
      .then((res) => {
        console.log(res);
        getAllCategories()
          .then((data) => setCategories(data))
          .catch((err) => console.log(err));
        setToBeUpdated(false);
      })
      .catch((err) => console.log(err));
  };

  const updateToBeUpdated = (categoryId) => {
    setCategoryToBeUpdated(categoryId);
    setToBeUpdated(true);
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

  const updateCategoryForm = () => {
    return (
      <div className="my-4">
        <form>
          <div className="form-group">
            <p className="lead">Update Category</p>
            <input
              type="text"
              className="form-control my-3 "
              required
              placeholder="Enter updated name"
              value={updatedName}
              onChange={updateUpdateHandler}
            />
            <button
              onClick={() => onUpdateClick()}
              className="btn btn-outline-info"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
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
              onChange={createUpdateHandler}
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
        <button
          onClick={() => updateToBeUpdated(c._id)}
          className="btn btn-sm btn-warning mx-4"
        >
          Update
        </button>{" "}
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
        {toBeUpdated && updateCategoryForm()}
      </div>
    </div>
  );
}
