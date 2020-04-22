import { API } from "../../config";

export const getAllOrders = (userId, authToken) => {
  return fetch(`${API}/order/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};
