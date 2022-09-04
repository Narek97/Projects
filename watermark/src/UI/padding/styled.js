import styled from 'styled-components'
import { Span } from '../../styled'

export const Padding = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #7683a8;
  @media (max-width: 768px) {
    height: 100%;
    border-bottom: 2px solid #dee3f0;
    justify-content: center;
  }
`

export const ImputeRange = styled.input`
  width: 75%;
  height: 3px;
  border-radius: 4px;
  margin-top: 20px;
  background: #ffffff;
`
export const Title = styled(Span)`
  padding-top: 7%;
`
