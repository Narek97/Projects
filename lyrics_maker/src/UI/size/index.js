import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'

const Size = () => {
  return (
    <Styled.Container>
      <Styled.Text> Text Size</Styled.Text>
      <Styled.InputSize placeholder="0" type="number" max="100" min="0" />
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  state: state.app,
})

export default connect(mapStateToProps, mapDispatchToProps)(Size)
