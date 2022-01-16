import { ActionTypes } from "../constants/action-types"

const intitalState = {
  products: [
    
  ],

}
export const productReducer =(state = intitalState, action)=>{
  switch(action.type){
    case ActionTypes.SET_PRODUCTS:
      return {...state,
        products: action.payload};
    default: 
      return state;
  }
}

export const selectedProductReducer = (state={}, action)=>{
  const {type, payload} = action;
  switch(type){
    case ActionTypes.SELECTED_PRODUCTS:
      return{...state, ...payload};
    default:
      return state;

  }
}