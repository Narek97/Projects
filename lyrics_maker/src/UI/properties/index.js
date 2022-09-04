import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'

const Properties = () => {
  return (
    <Styled.Container>
      <Styled.Text> Properties</Styled.Text>
      <Styled.Div>
        <Styled.Bold>
          <Styled.Icon className="material-icons">format_bold</Styled.Icon>
        </Styled.Bold>
        <Styled.Italic>
          <Styled.Icon className="material-icons">format_italic</Styled.Icon>
        </Styled.Italic>
        <Styled.Underline>
          <Styled.Icon className="material-icons">
            format_underlined
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

export default connect(mapStateToProps, mapDispatchToProps)(Properties)
