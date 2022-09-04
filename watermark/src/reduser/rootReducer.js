import {
  DONE,
  GO_TO_MAIN_PAGE,
  UPLOAD_IMG,
  UPLOAD_TEXT,
  CHANGE_OPACITY_VALUE,
  SET_MODE_VALUE,
  PUT_PICTURE_CANVAS_CORNER,
  CHANGE_PADDING_VALUE,
  CHANGE_TEXT_VALUE,
  CHANGE_TEXT_SIZE,
  CHANGE_TEXT_FONT_PATH,
  CHANGE_TEXT_COLOR,
  CHANGE_PICTURE_COORDINATES,
  CHANGE_PICTURE_SIZE,
} from './type'

export const reducer = (state, action) => {
  switch (action.type) {
    case DONE:
      console.log(state)
      return state
    case GO_TO_MAIN_PAGE:
      return {
        ...action.payload,
      }
    case UPLOAD_IMG:
      return {
        ...state,
        value: action.payload.value,
        type: action.payload.type,
        opacity: 100,
        imageCropParams: {
          width: action.payload.size.width,
          height: action.payload.size.height,
          top: 10,
          left: 10,
        },
      }
    case UPLOAD_TEXT:
      return {
        ...state,
        value: action.payload.value,
        type: action.payload.type,
        fontSize: action.payload.fontSize,
        color: action.payload.color,
        fontPath: action.payload.font,
        opacity: 100,
        imageCropParams: {
          width: action.payload.size,
          height: action.payload.size,
          top: 10,
          left: 10,
        },
      }
    case CHANGE_OPACITY_VALUE:
      return {
        ...state,
        opacity: action.payload,
      }
    case SET_MODE_VALUE:
      return {
        ...state,
        padding: state.mode === 'single' ? 0 : undefined,
        mode: state.mode === 'single' ? 'tiled' : 'single',
      }
    case PUT_PICTURE_CANVAS_CORNER:
      return {
        ...state,
        imageCropParams: {
          ...state.imageCropParams,
          top: action.payload.newTop,
          left: action.payload.newLeft,
        },
      }
    case CHANGE_PADDING_VALUE:
      return {
        ...state,
        padding: action.payload,
      }
    case CHANGE_TEXT_VALUE:
      return {
        ...state,
        value: action.payload,
      }
    case CHANGE_TEXT_SIZE:
      return {
        ...state,
        fontSize: action.payload,
      }
    case CHANGE_TEXT_FONT_PATH:
      return {
        ...state,
        fontPath: action.payload,
      }
    case CHANGE_TEXT_COLOR:
      return {
        ...state,
        color: action.payload,
      }
    case CHANGE_PICTURE_COORDINATES:
      return {
        ...state,
        imageCropParams: {
          ...state.imageCropParams,
          left: action.payload.newLeft,
          top: action.payload.newTop,
        },
      }
    case CHANGE_PICTURE_SIZE:
      return {
        ...state,
        imageCropParams: {
          ...state.imageCropParams,
          width: action.payload.newSize.width,
          height: action.payload.newSize.height,
        },
      }
    default:
      return state
  }
}
