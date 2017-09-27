export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART_CLICKED',
    payload: product
  }
};
