import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    background-color: #eef5ff;
    height: 100%;
  }
`
