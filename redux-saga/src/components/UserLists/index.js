import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_USER_REQUEST } from "../../constants";

function UsersLists({ user, index }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.loginDate}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() =>
            dispatch({ type: DELETE_USER_REQUEST, payload: user.id })
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UsersLists;
