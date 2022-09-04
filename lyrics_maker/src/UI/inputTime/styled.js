import styled from 'styled-components'

export const InputTime = styled.input`
  width: 65px;
  padding: 5px;
  ::-webkit-datetime-edit-ampm-field {
    display: none;
  }
  outline-style: none;
  border: 1px solid #dde3f0;
  border-radius: 5px;
  &:focus {
    outline-style: none;
  }
`
