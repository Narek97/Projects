import React, { useRef, useEffect, useContext } from 'react'
import { DispatchContext, StateContext } from '../../provider'
import { changePictureSize } from '../../reduser/action'
import { useMoveHook } from '../../useHook/useMoveHook'
import * as Styled from './styled'

export const SingleText = () => {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)
  const refResizable = useRef(null)
  const startUseDragAndDrop = useMoveHook(refResizable)
  useEffect(() => {
    const width = refResizable.current.getBoundingClientRect().width
    const height = refResizable.current.getBoundingClientRect().height
    dispatch(changePictureSize({ newSize: { width, height } }))
  }, [dispatch, state.fontSize])

  return (
    <Styled.Frame
      id={'resizable'}
      ref={refResizable}
      allData={state}
      onMouseDown={startUseDragAndDrop}
    >
      {state.value}
    </Styled.Frame>
  )
}
