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

export const InputSize = styled.input`
  width: 46px;
  height: 24px;
  margin-top: 3px;
  border: 1px solid rgba(194, 201, 222, 1);
  border-radius: 10px;
  color: rgba(156, 166, 197, 1);
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
