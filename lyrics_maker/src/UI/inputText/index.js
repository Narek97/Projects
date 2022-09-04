import React, { useRef, useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'
import { chageAudioChankText } from '../../redux/action'

const InputText = ({ chageAudioChankText, id, text }) => {
  const ref = useRef(null)
  const [value, setValue] = useState('')
  const onBlurText = useCallback(() => {
    console.log(value, 'InputText')
    chageAudioChankText(value, id)
  }, [chageAudioChankText, value, id])

  useEffect(() => {
    ref.current.addEventListener('blur', onBlurText)
  }, [onBlurText])
  return (
    <Styled.InputText
      onChange={(e) => setValue(e.target.value)}
      defaultValue={text}
      ref={ref}
    />
  )
}

const mapDispatchToProps = {
  chageAudioChankText,
}

export default connect(null, mapDispatchToProps)(InputText)
