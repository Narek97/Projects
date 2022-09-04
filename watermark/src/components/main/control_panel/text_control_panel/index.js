import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../../../../provider'
import { CheckBox } from '../../../../UI/checkBox'
import { Dropdown } from '../../../../UI/dropdown'
import { Input } from '../../../../UI/input'
import { Opacity } from '../../../../UI/opacity'
import { Padding } from '../../../../UI/padding'
import { Position } from '../../../../UI/position'
import { Size } from '../../../../UI/size'
import * as Styled from './styled'

export function TextControlPanel() {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)
  return (
    <Styled.TextControlPanel>
      <Input value={state.value} dispatch={dispatch} />
      <Size dispatch={dispatch} />
      <Dropdown dispatch={dispatch} />
      <Opacity dispatch={dispatch} />
      <CheckBox mode={state.mode} dispatch={dispatch} />
      {state.mode === 'single' ? <Position /> : <Padding dispatch={dispatch} />}
    </Styled.TextControlPanel>
  )
}
