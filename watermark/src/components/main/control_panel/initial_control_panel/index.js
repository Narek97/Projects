import React, { useContext } from 'react'
import * as Styled from './styled'
import UP_ARROW from '../../../../img/up-arrow.svg'
import { DispatchContext } from '../../../../provider'
import { imgUpload, textUpload } from '../../../../reduser/action'
import {
  IMG_URL,
  IMG_DEFAULT_SIZE,
  TEXT_DEFAULT_SIZE,
  TEXT_DEFAULT_FONT_SIZE,
  TEXT_DEFAULT_COLOR,
  TEXT_DEFAULT_FONT,
} from '../../../../constants/index'

export const InitialControlPanel = () => {
  const { dispatch } = useContext(DispatchContext)

  return (
    <Styled.InitialControlPanel>
      <Styled.UploadImgButton
        onClick={() => dispatch(imgUpload(IMG_URL, 'image', IMG_DEFAULT_SIZE))}
      >
        <Styled.IMG src={UP_ARROW} alt="" /> UPLOAD YOUR LOGO
      </Styled.UploadImgButton>

      <Styled.OR> or </Styled.OR>

      <Styled.UploadTextButton
        onClick={() =>
          dispatch(
            textUpload(
              'Hello world',
              'text',
              TEXT_DEFAULT_SIZE,
              TEXT_DEFAULT_FONT_SIZE,
              TEXT_DEFAULT_COLOR,
              TEXT_DEFAULT_FONT
            )
          )
        }
      >
        Type text
      </Styled.UploadTextButton>
    </Styled.InitialControlPanel>
  )
}
