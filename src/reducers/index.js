import {INCREMENT, DECREMENT,INCREASE_COUNT_5, DECREASE_COUNT_5,INCREASE_COUNT_10, DECREASE_COUNT_10 } from '../actions/counterAction'
const initialState={
  count:0}
  export function counter(state=initialState,action){
switch(action.type){
  case INCREMENT:
    return {count:state.count+action.payload.count}
    case DECREMENT:
    return {count:state.count+action.payload.count}
    default:
      return state;}
}
