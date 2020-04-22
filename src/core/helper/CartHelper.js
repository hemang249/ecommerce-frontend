import { API } from "../../config";

export const addItemToCart = (product, count) => {
  let cart = {};
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  cart[product._id] = { product, count };
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getItemsFromCart = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  }
};

export const createOrder = (userId, token, amount, address) => {
  const cart = getItemsFromCart();
  let products = [];

  Object.entries(cart).forEach(([key, value]) => {
    products.push({
      productId: value.product._id,
      name: value.product.name,
      count: value.count,
    });
  });

  return fetch(`${API}/order`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      order: {
        products,
        amount,
        address,
      },
    }),
  })
    .then((data) => data.json)
    .catch((err) => console.log(err));
};
