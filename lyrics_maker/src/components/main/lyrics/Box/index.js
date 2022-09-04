import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'

import { deletAudioChunk } from '../../../../redux/action'
import InputText from '../../../../UI/inputText'
import InputTime from '../../../../UI/inputTime'

export const Box = ({ id, text, start, end, deletAudioChunk }) => {
  return (
    <Styled.Div>
      {id !== 0 ? (
        <Styled.Icon
          className="material-icons"
          onClick={() => deletAudioChunk(id)}
        >
          delete
        </Styled.Icon>
      ) : (
        ''
      )}

      <InputText text={text} id={id} />
      <Styled.Box>
        <InputTime start={start} end={end} id={id} />
      </Styled.Box>
    </Styled.Div>
  )
}

const mapDispatchToProps = {
  deletAudioChunk,
}

export default connect(null, mapDispatchToProps)(Box)
