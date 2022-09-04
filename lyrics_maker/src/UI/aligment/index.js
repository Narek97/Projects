import React from 'react'
import { connect } from 'react-redux'
import * as Styled from '../properties/styled'

const Aligment = () => {
  return (
    <Styled.Container>
      <Styled.Text> Aligment</Styled.Text>
      <Styled.Div>
        <Styled.Bold>
          <Styled.Icon className="material-icons">
            format_align_left
          </Styled.Icon>
        </Styled.Bold>
        <Styled.Italic>
          <Styled.Icon className="material-icons">
            format_align_center
          </Styled.Icon>
        </Styled.Italic>
        <Styled.Underline>
          <Styled.Icon className="material-icons">
            format_align_right
          </Styled.Icon>
        </Styled.Underline>
      </Styled.Div>
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  state: state.app,
})

export default connect(mapStateToProps, mapDispatchToProps)(Aligment)
