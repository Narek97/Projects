import React, { useState } from 'react'
import { changeTextColor, changeTextSize } from '../../reduser/action'
import * as Styled from './styled'

export const Size = React.memo(({ dispatch }) => {
  const [color, setColor] = useState('#FF77E0')
  return (
    <Styled.Size>
      <span>Size</span>
      <Styled.ImputeRange
        onChange={(e) => dispatch(changeTextSize(+e.target.value))}
        type="range"
        defaultValue="20"
        max="100"
        min="20"
      />

      <Styled.ImputeColor
        onChange={(e) => setColor(e.target.value)}
        type="color"
        defaultValue="#FF77E0"
      />

      {/* <button onClick={() => dispatch(changeTextColor(color))}>OK</button> */}
    </Styled.Size>
  )
})
