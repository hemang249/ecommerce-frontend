import { API } from "../../config";

export const createCategory = (userId, token, name) => {
  return fetch(`${API}/category/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: name }),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const getAllCategories = () => {
  return fetch(`${API}/category/all`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const deleteCategory = (userId, token, categoryId) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const updateCategory = (userId, token, categoryId, name) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: {
      name: name,
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

// Product Calls
export const createProduct = (userId, token, product) => {
  fetch(`${API}/product/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};
