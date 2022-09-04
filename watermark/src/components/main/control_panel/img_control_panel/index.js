import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../../../../provider'
import { CheckBox } from '../../../../UI/checkBox'
import { Imig } from '../../../../UI/imig'
import { Opacity } from '../../../../UI/opacity'
import { Padding } from '../../../../UI/padding'
import { Position } from '../../../../UI/position'
import * as Styled from './styled'

export function ImgControlPanel() {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)
  return (
    <Styled.ImgControlPanel>
      <Imig url={state.value} />
      <Opacity dispatch={dispatch} />
      <CheckBox mode={state.mode} dispatch={dispatch} />
      {state.mode === 'single' ? <Position /> : <Padding dispatch={dispatch} />}
    </Styled.ImgControlPanel>
  )
}
