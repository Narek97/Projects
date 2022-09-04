import axios from "axios";
import * as types from "../actionTypes";

const loadTextBlockStart = () => ({
  type: types.LOAD_TEXT_BLOCK_START,
});

const loadTextBlockSuccess = (data) => ({
  type: types.LOAD_TEXT_BLOCK_SUCCESS,
  payload: data,
});

const loadTextBlockFail = (error) => ({
  type: types.LOAD_TEXT_BLOCK_FAIL,
  payload: error,
});

const saveTextBlockFail = (error) => ({
  type: types.SAVE_TEXT_BLOCK_FAIL,
  payload: error,
});

export const changeBlockPosition = (block) => ({
  type: types.CHANGE_BLOCK_POSITION,
  payload: block,
});

export const addNewTextBlock = (block) => ({
  type: types.ADD_NEW_TEXT_BLOCK,
  payload: block,
});

export const deleteTextBlock = (block) => ({
  type: types.DELETE_TEXT_BLOCK,
  payload: block,
});

export const saveDataRequest = (blocks, id) => {
  return async function (dispatch) {
    try {
      axios.put(
        `https://text-block-4b1ab-default-rtdb.firebaseio.com/${id}.json`,
        blocks
      );
    } catch (error) {
      dispatch(
        saveTextBlockFail(
          "Internal server errors please reload the page or try again later"
        )
      );
    }
  };
};

export const downloadTextBlocksRequest = (id) => {
  return async function (dispatch) {
    try {
      dispatch(loadTextBlockStart());
      const response = await axios.get(
        `https://text-block-4b1ab-default-rtdb.firebaseio.com/${id}.json`
      );
      response.data && dispatch(loadTextBlockSuccess(response.data));
    } catch (error) {
      dispatch(
        loadTextBlockFail(
          "Internal server errors please reload the page or try again later "
        )
      );
    }
  };
};
