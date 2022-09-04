import * as types from "../actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  loginError: null,
  registerError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return { ...state, currentUser: null };

    case types.REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loginError: action.payload,
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
