import React, { useState } from 'react'
import * as Styled from './styled'
import {
  POSITION_TOP_LEFT,
  POSITION_TOP_RIGHT,
  POSITION_BOTTOM_LEFT,
  POSITION_BOTTOM_RIGHT,
} from '../../constants'
import { usePlacePictureCornersHook } from '../../useHook/usePlacePictureCornersHook'

export const Position = React.memo(() => {
  const [active, setActive] = useState(null)
  const position = usePlacePictureCornersHook()

  const hadleClick = (newPosition, index) => {
    position(newPosition)
    setActive(index)
  }
  return (
    <Styled.PositionContainer>
      <Styled.Title>Position</Styled.Title>
      <Styled.Position>
        <Styled.PositionBox
          className={`${active === 0 ? 'active' : ''}`}
          onClick={() => hadleClick(POSITION_TOP_LEFT, 0)}
        >
          <Styled.Column value={180} />
        </Styled.PositionBox>

        <Styled.PositionBox
          className={`${active === 1 ? 'active' : ''}`}
          onClick={() => hadleClick(POSITION_TOP_RIGHT, 1)}
        >
          <Styled.Column value={-90} />
        </Styled.PositionBox>

        <Styled.PositionBox
          className={`${active === 2 ? 'active' : ''}`}
          onClick={() => hadleClick(POSITION_BOTTOM_LEFT, 2)}
        >
          <Styled.Column value={90} />
        </Styled.PositionBox>

        <Styled.PositionBox
          className={`${active === 3 ? 'active' : ''}`}
          onClick={() => hadleClick(POSITION_BOTTOM_RIGHT, 3)}
        >
          <Styled.Column />
        </Styled.PositionBox>
      </Styled.Position>
    </Styled.PositionContainer>
  )
})
