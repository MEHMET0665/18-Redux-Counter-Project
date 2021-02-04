import {COUNT} from '../actions/counterAction'
const initialState={
  count:0,
}
export default function countReducer(state=initialState,action){
  switch (action.type){
    case COUNT:
      console.log(action.payload.count)
      return {count:state.count+action.payload.count*1};
        default:
          return state;}}

