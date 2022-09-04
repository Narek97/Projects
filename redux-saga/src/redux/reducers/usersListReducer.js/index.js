import {
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  SORT_USER_LIST,
} from "./usersListAction";
const initialState = {
  usersListData: [],
};

export default function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        usersListData: action.payload,
      };
    }
    case DELETE_USER_SUCCESS: {
      const newUsersDataList = state.usersListData.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        usersListData: newUsersDataList,
      };
    }
    case SORT_USER_LIST: {
      const sortList = state.usersListData.sort((a, b) =>
        a[action.payload] > b[action.payload]
          ? 1
          : b[action.payload] > a[action.payload]
          ? -1
          : 0
      );
      return {
        ...state,
        usersListData: sortList,
      };
    }

    default:
      return state;
  }
}
