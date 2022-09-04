import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitial } from "../../redux/userAuthorization/userAction";

function AppHeader() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handelSubmit = () => {
    if (currentUser) {
      dispatch(logoutInitial());
    }
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <h2>Text block </h2>
        </div>
        <div>
          <h2>{`Hello ${currentUser.displayName}`}</h2>
        </div>
        <div className="mobileHidden">
          <h2 className="logout" onClick={handelSubmit}>
            Logout
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
