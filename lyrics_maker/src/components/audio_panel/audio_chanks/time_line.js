import React, { useRef, useEffect } from 'react'
import LeftButton from './left_button'
import RightButton from './right_button'
import * as Styled from './styled'
import { useElementResize } from '../../../useHook/useElementResize'
import { DURATION } from '../../../constants'

export const TimeLines = React.memo(({ containerRef, el, idx }) => {
  const lineRef = useRef(null)
  const onElementResize = useElementResize(
    lineRef,
    containerRef,
    'center',
    el,
    idx
  )

  useEffect(() => {
    lineRef.current.style.left = `${(el.start / DURATION) * 100}%`
    lineRef.current.style.width = `${((el.end - el.start) / DURATION) * 100}%`
  }, [lineRef, el])

  return (
    <Styled.TimeLinesItem
      key={el.id}
      left={el.start}
      right={el.end}
      ref={lineRef}
    >
      <Styled.CenterButton
        className="material-icons"
        onMouseDown={onElementResize}
      >
        settings_ethernet
      </Styled.CenterButton>
      <LeftButton
        lineRef={lineRef}
        containerRef={containerRef}
        el={el}
        idx={idx}
      />
      <RightButton
        lineRef={lineRef}
        containerRef={containerRef}
        el={el}
        idx={idx}
      />
    </Styled.TimeLinesItem>
  )
})
