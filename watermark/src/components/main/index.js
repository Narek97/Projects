import React, { useContext } from 'react'
import { MOBILE_SIZE } from '../../constants'
import { StateContext } from '../../provider'
import { useWindowSize } from '../../useHook/useWindowSize'
import { ControlPanel } from './control_panel'
import { MobilControlPanel } from './mobile_control_panel'
import { ScreanPanel } from './screan_panel'
import * as Styled from './styled'

export function Main() {
  const [width] = useWindowSize()
  const { state } = useContext(StateContext)
  return (
    <Styled.Main>
      {width > MOBILE_SIZE ? <ControlPanel /> : <MobilControlPanel />}
      {width > MOBILE_SIZE ? <ScreanPanel /> : state.value && <ScreanPanel />}
    </Styled.Main>
  )
}
