import { combineReducers } from "redux";
import acountReducer from "./accountReducer";

const reducers = combineReducers({
  account: acountReducer,
});

export default reducers;
