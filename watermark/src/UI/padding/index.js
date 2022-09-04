import React from 'react'
import { changePaddingValue } from '../../reduser/action'
import * as Styled from './styled'

export const Padding = ({ dispatch }) => {
  return (
    <Styled.Padding>
      <Styled.Title>Padding</Styled.Title>
      <Styled.ImputeRange
        type="range"
        defaultValue="0"
        max="100"
        min="0"
        onChange={(e) => dispatch(changePaddingValue(+e.target.value))}
      />
    </Styled.Padding>
  )
}
