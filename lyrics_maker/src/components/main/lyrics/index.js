import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'
import { addNewAudioChunk } from '../../../redux/action'
import Box from './Box'

const LyricsPanel = ({ audioChunks, addNewAudioChunk, duration }) => {
  const addChunk = () => {
    const end = audioChunks[audioChunks.length - 1].end
    if (end < duration) {
      addNewAudioChunk(end, duration)
    }
  }

  return (
    <Styled.Container>
      {audioChunks.map((el) => {
        return (
          <Box
            text={el.textParams.text}
            start={el.start}
            end={el.end}
            id={el.id}
            key={el.id}
          />
        )
      })}
      <Styled.Add onClick={addChunk}>
        <span style={{ fontSize: '10px' }} className="material-icons">
          add
        </span>
        add subtitle
      </Styled.Add>
    </Styled.Container>
  )
}

const mapDispatchToProps = {
  addNewAudioChunk,
}

const mapStateToProps = (state) => ({
  audioChunks: state.app.audioChunks,
  duration: state.app.duration,
})

export default connect(mapStateToProps, mapDispatchToProps)(LyricsPanel)
