export const increaseQuantity = (product) => {
  return {
    type: 'QUANTITY_ICREASED',
    payload: product
  }
};
