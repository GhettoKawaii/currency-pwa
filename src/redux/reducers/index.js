import { combineReducers } from "redux";
import getCoinsReducer from "./getCoinsReducer";

const rootReducer = combineReducers({
  getCoins: getCoinsReducer
});

export default rootReducer;
