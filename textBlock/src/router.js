import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import UserRoutes from "./components/UserRoutes";
import ErrorPage from "./components/ErrorPage";

import {
  loadingStart,
  loadingEnd,
  setUser,
} from "./redux/userAuthorization/userAction";

export const useRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(loadingStart());
      auth.onAuthStateChanged((authUser) => {
        dispatch(setUser(authUser));
        dispatch(loadingEnd());
      });
    } catch (error) {
      dispatch(loadingEnd());
    }
  }, [dispatch]);

  return (
    <Switch>
      <UserRoutes exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};
