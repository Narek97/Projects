import React from 'react'
import * as Styled from './styled'
import { useElementResize } from '../../../useHook/useElementResize'
export default function RightButton({ lineRef, containerRef, el, idx }) {
  const onElementResize = useElementResize(
    lineRef,
    containerRef,
    'right',
    el,
    idx
  )
  return (
    <Styled.RightButton onMouseDown={onElementResize}>
      <Styled.Icon className="material-icons">chevron_right</Styled.Icon>
    </Styled.RightButton>
  )
}
