export const addItemToCart = (product, count) => {
  let cart = {};
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  cart[product._id] = { product, count };
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getItemsFormCart = () => {
  if(localStorage.getItem("cart")) {
    return localStorage.getItem("cart")
  }
}
