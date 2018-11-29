import { INC_NUMBER } from "../actions";

export default function performAction(state = { num: 0 }, action) {
  switch (action.type) {
    case INC_NUMBER:
      console.log("Action performed from the reducer");
      console.log(state, action);
      let num = state.num + 1;
      return { num };
    default:
      num = 0;
      return state;
  }
}
