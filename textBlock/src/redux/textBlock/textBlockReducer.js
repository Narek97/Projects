import * as types from "../actionTypes";

const initialState = {
  loading: false,
  blocks: [],
  error: null,
};

const textBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_TEXT_BLOCK_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_TEXT_BLOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        blocks: action.payload,
      };
    case types.LOAD_TEXT_BLOCK_FAIL:
    case types.SAVE_TEXT_BLOCK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CHANGE_BLOCK_POSITION:
      return {
        ...state,
        blocks: action.payload,
      };
    case types.ADD_NEW_TEXT_BLOCK:
      return {
        ...state,
        blocks: [action.payload, ...state.blocks],
      };
    case types.DELETE_TEXT_BLOCK:
      return {
        ...state,
        blocks: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return { ...state, blocks: [] };
    default:
      return state;
  }
};

export default textBlockReducer;
