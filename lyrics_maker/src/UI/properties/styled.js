import styled from 'styled-components'
import { Span } from '../../styled'
export const Container = styled.div`
  border-bottom: 1px solid rgba(112, 112, 112, 0.25);
  padding: 10px;
`

export const Text = styled(Span)``
export const Icon = styled.span``

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 149px;
  height: 38px;
  border: 1px solid #c2c9de;
  border-radius: 10px;
`
export const Italic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
  cursor: pointer;
  border-right: 1px solid rgba(112, 112, 112, 0.25);
  &:hover {
    background-color: #eceff7;
  }
  &:hover ${Icon} {
    color: #6291f7;
  }
`

export const Bold = styled(Italic)`
  border-right: 1px solid rgba(112, 112, 112, 0.25);
  border-radius: 10px 0 0 10px;
`
export const Underline = styled(Italic)`
  border-right: 0;
  border-radius: 0 10px 10px 0;
`
