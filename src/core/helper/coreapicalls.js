import { API } from "../../config";

export const getAllProducts = () => {
  return fetch(`${API}/product/all`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};
