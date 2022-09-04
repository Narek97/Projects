import React, { useEffect } from "react";
import UserLists from "../../components/UserLists/index";
import { useDispatch,useSelector } from "react-redux";
import { DOWNLOAD_ALL_USERS_REQUEST } from "../../constants";
import { SORT_USER_LIST } from "../../redux/reducers/usersListReducer.js/usersListAction";
import "./style.css";

function AdminPanel() {
  const dispatch = useDispatch();
  const { usersListData } = useSelector((state) => state.userList);

  useEffect(() => {
    if (!usersListData.length) {
      dispatch({ type: DOWNLOAD_ALL_USERS_REQUEST });
    }
  }, [dispatch, usersListData]);

  const sortUser = (key) => {
    dispatch({ type: SORT_USER_LIST, payload: key });
  };

  return (
    <div>
      {usersListData.length ? (
        <>
          <div className="sortUsers">
            {Object.keys(usersListData[0]).map(
              (key) =>
                key !== "password" && (
                  <button
                    key={key}
                    type="button"
                    className="btn btn-primary"
                    onClick={() => sortUser(key)}
                  >
                    Sort by {key}
                  </button>
                )
            )}
          </div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Login Date</th>
                <th scope="col">X</th>
              </tr>
            </thead>
            <tbody>
              {usersListData.map((user, index) => (
                <UserLists key={user.id} user={user} index={index} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h1 className="noUsers">No users</h1>
      )}
    </div>
  );
}

export default AdminPanel;
