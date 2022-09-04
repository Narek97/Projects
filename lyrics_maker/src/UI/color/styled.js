import styled from 'styled-components'
import { Span } from '../../styled'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Text = styled(Span)`
  padding-bottom: 10px;
`
export const ImputeColor = styled.input`
  width: 30px;
  height: 30px;
  border: 1px solid #dee3f0;
  border-radius: 6px;
  cursor: pointer;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 1px;
    margin: 0;
    padding: 0;
  }
`
