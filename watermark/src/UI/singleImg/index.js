import React, { useRef, useContext } from 'react'
import * as Styled from './styled'
import { useMoveHook } from '../../useHook/useMoveHook'
import { useElementResize } from '../../useHook/useElementResize'
import { StateContext } from '../../provider'

export const SingleImg = () => {
  const ref = useRef(null)
  const useDragAndDrop = useMoveHook(ref)
  const onElementResize = useElementResize(ref)
  const { state } = useContext(StateContext)
  return (
    <Styled.Resizable data={state.imageCropParams} ref={ref} id={'resizable'}>
      <Styled.Resizers>
        <Styled.IMG data={state} onMouseDown={useDragAndDrop} />
        <Styled.ResizerBottom onMouseDown={onElementResize} />
      </Styled.Resizers>
    </Styled.Resizable>
  )
}
