import React from 'react'
import { changeOpacityValue } from '../../reduser/action'
import * as Styled from './styled'

export const Opacity = React.memo(({ dispatch }) => {
  return (
    <Styled.Opacity>
      <Styled.Title>Opacity</Styled.Title>
      <Styled.ImputeRange
        onChange={(e) => dispatch(changeOpacityValue(+e.target.value))}
        type="range"
        defaultValue="100"
        max="100"
        min="20"
      />
    </Styled.Opacity>
  )
})
