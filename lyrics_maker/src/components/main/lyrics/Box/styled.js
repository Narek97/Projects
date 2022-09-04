import styled from 'styled-components'

export const Div = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 0px 6px 12px #0052e01a;
  background-color: #ffffff;
`

export const Icon = styled.span`
  align-self: flex-end;
  color: #9aa6c8;
  cursor: pointer;
  &:hover {
    color: #6291f7;
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
