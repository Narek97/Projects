import React from 'react'
import * as Styled from './styled'

export const Imig = React.memo(({ url }) => {
  return (
    <Styled.ImigContainer>
      <Styled.BgImg>
        <img width={45} height={45} src={url} alt="" />
      </Styled.BgImg>
    </Styled.ImigContainer>
  )
})
