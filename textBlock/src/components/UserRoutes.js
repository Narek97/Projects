import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoutes = ({ ...rest }) => {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);
  return currentUser && <Route {...rest} />;
};

export default UserRoutes;
