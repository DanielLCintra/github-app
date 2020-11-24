import { combineReducers } from "redux";

import genericReducer from "./generics.slice";
import userReducer from "./user.slice";

export default combineReducers({
  genericReducer,
  userReducer,
});
