import React from 'react'
import { setModeValue } from '../../reduser/action'
import * as Styled from './styled'

export const CheckBox = React.memo(({ mode, dispatch }) => {
  return (
    <Styled.CheckBoxContainer>
      <Styled.Title>Tiled mode</Styled.Title>
      <Styled.Switches mode={mode}>
        <Styled.CheckBoxWrapper>
          <Styled.CheckBox
            onChange={() => dispatch(setModeValue())}
            id="checkbox"
            type="checkbox"
          />
          <Styled.CheckBoxLabel htmlFor="checkbox" />
        </Styled.CheckBoxWrapper>
      </Styled.Switches>
    </Styled.CheckBoxContainer>
  )
})
