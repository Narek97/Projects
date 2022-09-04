import React, { useState } from 'react'
import * as Styled from './styled'
import TextStyle from './text_style'
import filters from '../../../img/palette.png'
import media from '../../../img/picture.png'
import text from '../../../img/text.png'

export const MenuPanel = React.memo(() => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Styled.Container>
      <Styled.Ul>
        <Styled.InputContainer>
          <Styled.Input placeholder={'Your project name'} />
        </Styled.InputContainer>

        <Styled.Li className={`${isActive ? 'active' : ''}`}>
          <Styled.Div>
            <Styled.Img src={text} alt="text" />
            <Styled.Text> Text Style</Styled.Text>
            <Styled.Icon
              className="material-icons"
              onClick={() => setIsActive(!isActive)}
            >
              chevron_right
            </Styled.Icon>
          </Styled.Div>
          <TextStyle />
        </Styled.Li>

        <Styled.Li>
          <Styled.Div>
            <Styled.Img src={filters} alt="text" />
            <Styled.Text>Filters</Styled.Text>
            <Styled.Icon className="material-icons">chevron_right</Styled.Icon>
          </Styled.Div>
        </Styled.Li>

        <Styled.Li>
          <Styled.Div>
            <Styled.Img src={media} alt="text" />
            <Styled.Text>Media</Styled.Text>
            <Styled.Icon className="material-icons">chevron_right</Styled.Icon>
          </Styled.Div>
        </Styled.Li>
      </Styled.Ul>
    </Styled.Container>
  )
})
