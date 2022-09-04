import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'

const Opacity = () => {
  return (
    <Styled.Container>
      <Styled.Text> Opacity</Styled.Text>
      <Styled.ImputeRange type="range" defaultValue="100" max="100" min="20" />
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  state: state.app,
})

export default connect(mapStateToProps, mapDispatchToProps)(Opacity)
