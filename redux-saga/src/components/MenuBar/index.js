import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { USER_LOGOUT_REQUEST } from "../../constants";


function MenuBar() {
  const { role } = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: USER_LOGOUT_REQUEST });
  };

  return (
    <div className="menuBar">
      <NavLink
        to={role === "admin" ? "/admin" : "/home"}
        className="navLink"
        activeClassName="selected"
      >
        Home
      </NavLink>
      <NavLink to="/settings" className="navLink" activeClassName="selected">
        Setings
      </NavLink>
      <p onClick={() => logout()} className="navLink">
        Logout
      </p>
    </div>
  );
}

export default MenuBar;
