export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART_CLICKED',
    payload: product
  }
}
