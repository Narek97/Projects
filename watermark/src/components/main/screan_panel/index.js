import React, { useContext, useRef, useEffect, useState } from 'react'
import * as Styled from './styled'
import screan_url from '../../../img/screan.png'
import { StateContext } from '../../../provider'
import { pagesScreen } from '../../../util'
import { TiledMode } from '../../../UI/tiledMode'

export function ScreanPanel() {
  const ref = useRef(null)
  const { state } = useContext(StateContext)

  return (
    <Styled.ScreanPanel>
      <Styled.Screan ref={ref} id="screan">
        <Styled.Img width="100%" src={screan_url} alt="BGImg" />
        {state.mode === 'single' ? (
          pagesScreen(state.type)
        ) : (
          <TiledMode screanRef={ref} />
        )}
      </Styled.Screan>
    </Styled.ScreanPanel>
  )
}
