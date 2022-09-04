import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import userReducer from "./userReducer/index";
import usersListReducer from "./usersListReducer.js";
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: userReducer,
  userList: usersListReducer,
  router: connectRouter(history),
});

export default rootReducer;
