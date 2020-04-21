import { API } from "../../config";

export const signup = (user) => {
  return fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const signout = () => {
  localStorage.removeItem("token");
  return fetch(`${API}/auth/signout`, {
    method: "GET",
  })
    .then((res) => console.log("sign out successfull"))
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  localStorage.setItem("token", JSON.stringify(data));
  next();
};

export const isAuthenticated = () => {
  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return false;
  }
};
