import {
  START_LOADING,
  STOP_LOADING,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_IN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_UPDATE_SETTINGS_SUCCESS,
  CHECK_USER_IN_SYSTEM_SUCCESS,
  REQUEST_ERROR,
} from "./userActions";

const initialState = {
  loading: false,
  isAuthenticated: false,
  error: "",
  userData: {
    id: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    role: null,
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case REQUEST_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CHECK_USER_IN_SYSTEM_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userData: action.payload,
      };
    }

    case USER_SIGN_UP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userData: action.payload,
      };
    }

    case USER_LOGOUT_SUCCESS: {
      return {
        initialState,
      };
    }
    case USER_SIGN_IN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userData: action.payload,
      };
    }
    case USER_UPDATE_SETTINGS_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
