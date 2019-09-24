export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}
