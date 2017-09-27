export default function(state=null, action){
  if(action.type === 'ADD_TO_CART_CLICKED') {
    if(state === null) {
      return [action.payload]
    } else {
      for(let i = 0; i < state.length; i++){
        if(state[i].id === action.payload.id) return state;
      }
      return [
        ...state, action.payload
      ]
    }
  }
  if(action.type === 'REMOVE_FROM_CART_CLICKED') {
    for(let i = 0; i < state.length; i++){
      if(state[i].id === action.payload.id){
        let cut = state.slice();
        cut.splice(i, 1);
        return cut;
      }
    }
  }
  if(action.type === 'QUANTITY_ICREASED'){
    for(let i = 0; i < state.length; i++){
      if(state[i].id === action.payload.id){
        ++action.payload.quantity
        let increment = state.slice();
        increment.splice(i, 1, action.payload);
        return increment;
      }
    }
  }
  if(action.type === 'QUANTITY_REDUCED'){
    for(let i = 0; i < state.length; i++){
      if(state[i].id === action.payload.id){
        --action.payload.quantity
        if(action.payload.quantity < 1) action.payload.quantity = 1;
        let decrement = state.slice();
        decrement.splice(i, 1, action.payload);
        return decrement;
      }
    }
  }
  return state;
}
