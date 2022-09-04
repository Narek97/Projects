import React from 'react'
import * as Styled from './styled'
import { useElementResize } from '../../../useHook/useElementResize'
export default function LeftButton({ lineRef, containerRef, el, idx }) {
  const onElementResize = useElementResize(
    lineRef,
    containerRef,
    'left',
    el,
    idx
  )
  return (
    <Styled.LeftButton onMouseDown={onElementResize}>
      <Styled.Icon className="material-icons">chevron_left</Styled.Icon>
    </Styled.LeftButton>
  )
}
