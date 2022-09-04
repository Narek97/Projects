import { combineReducers } from "redux";
import textBlockReducer from "./textBlock/textBlockReducer";
import userReducer from "./userAuthorization/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  textBlock: textBlockReducer,
});

export default rootReducer;
