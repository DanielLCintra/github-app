import { combineReducers } from "redux";

import genericReducer from "./genericsSlice";
import userReducer from "./userSlice";

export default combineReducers({
  genericReducer,
  userReducer,
});
