import React from 'react'
import * as Styled from './styled'
import Player from './player'

export const AudioPanel = React.memo(() => {
  return (
    <Styled.Container>
      <Player />
    </Styled.Container>
  )
})
