import styled from 'styled-components'

export const InputContainer = styled.div`
  padding-top: 1%;
  border-bottom: 1px solid #dee3f0;
  color: #7683a8;
  text-align: center;
`

export const WriteTextInput = styled.input`
  width: 90%;
  padding: 4%;
  background: #eef5ff;
  border: 1px solid #387dff;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  color: #0d2053;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`

export const TextCountDiv = styled.div`
  width: 94%;
  margin-top: 2%;
  font-size: 11px;
  text-align: end;
  color: #9aa6c8;
`
