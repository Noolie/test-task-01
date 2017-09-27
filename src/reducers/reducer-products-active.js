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
  return state;
}
