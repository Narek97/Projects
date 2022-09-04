import React from 'react'
import { changeTextValue } from '../../reduser/action'
import * as Styled from './styled'

export const Input = React.memo(({ value, dispatch }) => {
  return (
    <Styled.InputContainer>
      <Styled.WriteTextInput
        placeholder="Write your text..."
        maxLength="42"
        value={value}
        onChange={(e) => dispatch(changeTextValue(e.target.value))}
      />
      <Styled.TextCountDiv>{`${value.length} /42 characters advised`}</Styled.TextCountDiv>
    </Styled.InputContainer>
  )
})
