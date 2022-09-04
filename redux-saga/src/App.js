import MenuBar from "./components/MenuBar/index";
import { useSelector } from "react-redux";
import { useRouter } from "./router/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "./components/loading/index";
import { useHistory } from "react-router-dom";
import "./style.css";
import {
  CHECK_USER_IN_SYSTEM_REQUEST,
  userLocalStorageData,
} from "./constants/index";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const { pathname } = useSelector((state) => state.router.location);
  const routes = useRouter(isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    const userId = localStorage.getItem(userLocalStorageData);
    if (userId) {
      dispatch({ type: CHECK_USER_IN_SYSTEM_REQUEST, payload: userId });
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push(`${pathname}`);
    } else {
      history.push("/");
    }
  }, [dispatch, history, isAuthenticated, pathname]);

  return (
    <div className="App">
      {isAuthenticated && <MenuBar />}
      {loading ? <Loading /> : routes}
    </div>
  );
}

export default App;
