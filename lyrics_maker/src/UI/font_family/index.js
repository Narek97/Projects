import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'

const FontFamily = () => {
  const [isActive, setIsActive] = useState(false)
  const [fonts] = useState([
    { value: 'Montserrat' },
    { value: 'cursive' },
    { value: 'fantasy' },
    { value: 'monospace' },
    { value: 'revert' },
    { value: 'unset' },
  ])
  const [font, setFont] = useState('Montserrat')

  const settextSize = (e) => {
    setFont(e.target.innerHTML)
    setIsActive(!isActive)
  }

  return (
    <Styled.Container>
      <Styled.Text> FontFamily</Styled.Text>
      <Styled.Select isActive={isActive}>
        <Styled.Div>
          {font}
          <Styled.Icon
            className="material-icons"
            onClick={() => setIsActive(!isActive)}
          >
            arrow_right
          </Styled.Icon>
        </Styled.Div>

        {fonts.map((el, idx) => (
          <Styled.Font
            key={idx}
            value={el.value}
            onClick={(e) => settextSize(e)}
          >
            {el.value}
          </Styled.Font>
        ))}
      </Styled.Select>
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  state: state.app,
})

export default connect(mapStateToProps, mapDispatchToProps)(FontFamily)
