import React, { useContext } from 'react'
import { StateContext } from '../../../provider'
import { pagesControlPanel } from '../../../util'
import * as Styled from './styled'

export function ControlPanel() {
  const { state } = useContext(StateContext)
  return (
    <Styled.ControlPanel>
      {pagesControlPanel({ type: state.type })}
    </Styled.ControlPanel>
  )
}
