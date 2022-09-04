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

export const Done = () => {
  return {
    type: DONE,
  }
}
export const goToMainPage = (data) => {
  return {
    type: GO_TO_MAIN_PAGE,
    payload: data,
  }
}
export const imgUpload = (value, type, size = 0) => {
  return {
    type: UPLOAD_IMG,
    payload: { value, type, size },
  }
}
export const textUpload = (value, type, size = 0, fontSize, color, font) => {
  return {
    type: UPLOAD_TEXT,
    payload: { value, type, size, fontSize, color, font },
  }
}
export const changeOpacityValue = (value) => {
  return {
    type: CHANGE_OPACITY_VALUE,
    payload: value,
  }
}
export const setModeValue = () => {
  return {
    type: SET_MODE_VALUE,
  }
}
export const putPictureCanvasCorner = (value) => {
  return {
    type: PUT_PICTURE_CANVAS_CORNER,
    payload: value,
  }
}
export const changePaddingValue = (value) => {
  return {
    type: CHANGE_PADDING_VALUE,
    payload: value,
  }
}
export const changeTextValue = (value) => {
  return {
    type: CHANGE_TEXT_VALUE,
    payload: value,
  }
}
export const changeTextSize = (value) => {
  return {
    type: CHANGE_TEXT_SIZE,
    payload: value,
  }
}
export const changeTextFontPath = (value) => {
  return {
    type: CHANGE_TEXT_FONT_PATH,
    payload: value,
  }
}
export const changeTextColor = (value) => {
  return {
    type: CHANGE_TEXT_COLOR,
    payload: value,
  }
}
export const changePictureCoordinates = (value) => {
  return {
    type: CHANGE_PICTURE_COORDINATES,
    payload: value,
  }
}
export const changePictureSize = (value) => {
  return {
    type: CHANGE_PICTURE_SIZE,
    payload: value,
  }
}
