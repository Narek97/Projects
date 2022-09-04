import React, { useRef } from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'
import { TimeLines } from './time_line'

const AudioChanks = ({ audioChunks }) => {
  const containerRef = useRef(null)

  return (
    <Styled.Container ref={containerRef}>
      {audioChunks.map((el, idx) => (
        <TimeLines
          key={el.id}
          el={el}
          idx={idx}
          audioChunks={audioChunks}
          containerRef={containerRef}
        />
      ))}
      <Styled.TimeRuler>
        <Styled.TimeRulerMinut />
        <Styled.TimeRulerSecont />
      </Styled.TimeRuler>
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  audioChunks: state.app.audioChunks,
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioChanks)
