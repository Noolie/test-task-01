export default function(state = 0, action){
  if(action.type === 'ADD_TO_CART_CLICKED') {
    // return state + action.payload.price;
    return state;
  }
  return state;
}
