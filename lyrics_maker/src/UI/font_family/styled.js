import styled, {css} from 'styled-components'
import { Span, scroll } from '../../styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.25);
`

export const Text = styled(Span)``

export const Icon = styled.span`
  transition: 0.2s;
  cursor: pointer;
`

export const Div = styled.span`
  width: 100%;
  color: #6275b1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Select = styled.div`
  border: 1px solid #c2c9de;
  border-radius: 10px;
  line-height: 40px;
  margin-top: 10px;
  height: 40px;
  overflow: hidden;
  ${props => props.isActive && css`
    ${Icon} {
      transform: rotate(90deg);
    }
    height: 300px;
  `}

  transition: all 0.2s ease-in-out;
  ${scroll}
`

export const Font = styled.div`
  display: block;
  padding-left: 10px;
  line-height: 40px;
  color: #6275b1;
  &:hover {
    border-radius: 10px;
    background-color: rgba(194, 201, 222, 0.5);
    cursor: pointer;
  }
`
