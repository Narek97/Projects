import styled from 'styled-components'

export const App = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    height: 100%;
    background: none;
  }
`

export const Container = styled.div`
  max-width: 1007px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  @media (max-width: 768px) {
    height: 100%;
  }
`

export const Modal = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const Button = styled.button`
  font-family: 'Montserrat';
  border: 0;
  &:focus {
    outline-style: none;
  }
`

export const Span = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
