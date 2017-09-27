export const decreaseQuantity = (product) => {
  return {
    type: 'QUANTITY_REDUCED',
    payload: product
  }
};
