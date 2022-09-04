import React, { useState } from 'react'
import { changeTextFontPath } from '../../reduser/action'
import * as Styled from './styled'

export const Dropdown = React.memo(({ dispatch }) => {
  const [font, setFont] = useState(null)
  const changeFont = (e) => {
    dispatch(changeTextFontPath(e.target.value))
    setFont(e.target.value)
  }

  return (
    <Styled.Dropdown>
      <span>Font</span>
      <Styled.Select style={{ fontFamily: font }} onChange={changeFont}>
        <option style={{ fontFamily: 'Montserrat' }} value="Montserrat">
          Montserrat
        </option>
        <option style={{ fontFamily: 'cursive' }} value="cursive">
          cursive
        </option>
        <option style={{ fontFamily: 'fantasy' }} value="fantasy">
          fantasy
        </option>
        <option style={{ fontFamily: 'system-ui' }} value="system-ui">
          system-ui
        </option>
        <option style={{ fontFamily: 'sans-serif' }} value="sans-serif">
          sans-serif
        </option>
      </Styled.Select>
    </Styled.Dropdown>
  )
})
