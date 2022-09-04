import React, { useContext } from 'react'
import { StateContext } from '../../../provider'
import { mobilePagesControlPanel } from '../../../util'
import * as Styled from './styled'

export function MobilControlPanel() {
  const { state } = useContext(StateContext)

  return (
    <Styled.MobilControlPanel initial={state.value}>
      {mobilePagesControlPanel({ type: state.type })}
    </Styled.MobilControlPanel>
  )
}
