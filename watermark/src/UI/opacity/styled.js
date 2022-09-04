import styled from 'styled-components'
import { Span, Flex } from '../../styled'

export const Opacity = styled(Flex)`
  box-sizing: border-box;
  color: #7683a8;
  border-bottom: 2px solid #dee3f0;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100%;
  }
`

export const ImputeRange = styled.input`
  width: 75%;
  height: 3px;
  margin-top: 4%;
  border-radius: 4px;
  @media (max-width: 768px) {
  }
`

export const Title = styled(Span)``
