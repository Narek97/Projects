import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'

const Color = () => {
  return (
    <Styled.Container>
      <Styled.Text> Text Color</Styled.Text>
      <Styled.ImputeColor defaultValue="#FF77E0" type="color" />
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  state: state.app,
})

export default connect(mapStateToProps, mapDispatchToProps)(Color)
