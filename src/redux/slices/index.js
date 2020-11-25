import { combineReducers } from "redux";

import genericReducer from "./generics.slice";
import userReducer from "./user.slice";
import historicReducer from "./historic.slice";

export default combineReducers({
  genericReducer,
  userReducer,
  historicReducer,
});
