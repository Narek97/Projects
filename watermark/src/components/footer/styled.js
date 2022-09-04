import styled from 'styled-components'
import { Button, Flex } from '../../styled'

export const Footer = styled(Flex)`
  width: 100%;
  background-color: #cfe0ff;
  border-radius: 0px 0px 9px 9px;
  padding: 4% 0;
  border-top: 2px solid #dee3f0;
  @media (max-width: 768px) {
    background-color: #ffffff;
    /* padding: 6% 0; */
  }
`
export const Cancel = styled(Button)`
  border-radius: 20px;
  padding: 1% 3%;
  cursor: pointer;
  overflow: hidden;
  background: transparent;
  color: #5690ff;
  margin-right: 0.5%;
  &:hover {
    background: #deeaff;
  }
  @media (max-width: 768px) {
    padding: 2% 3%;
    margin-left: 3%;
  }
`
export const Done = styled(Button)`
  border-radius: 20px;
  padding: 1% 3%;
  overflow: hidden;
  cursor: pointer;
  background: #387dff;
  color: #ffffff;
  margin-left: 0.5%;
  &:disabled {
    background: #9ebfff;
  }
  @media (max-width: 768px) {
    padding: 2% 3%;
    margin-left: 3%;
    ${(props) =>
      props.mode === null &&
      `    
       display: none;  
    `}
  }
`
