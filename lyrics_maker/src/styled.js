import styled, { css } from 'styled-components'
export const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const button = css`
  font-family: 'Montserrat';
  border: 0;
  cursor: pointer;
  &:focus {
    outline-style: none;
  }
`
export const Span = styled.span`
  color: #6275b1;
  font-size: 11px;
`

export const scroll = css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c3cbe1;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #dbe8fd;
  }
`
