import styled from 'styled-components'
import { Button } from '../../../../styled'

export const InitialControlPanel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 75%;
  }
`

export const UploadImgButton = styled(Button)`
  background: #387dff;
  box-shadow: 0 3px 9px #387dff80;
  border-radius: 25px;
  cursor: pointer;
  color: #ffffff;
  padding: 4% 8%;
  @media (max-width: 768px) {
  }
`

export const IMG = styled.img`
  margin: -2px 5px -2px 0;
`

export const OR = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  color: #545f7e;
  margin: 10%;
  &:before {
    content: ' ';
    width: 70px;
    height: 2px;
    background: transparent linear-gradient(270deg, #c1c9e0 0%, #c1c9e000 100%);
    display: inline-block;
  }
  &:after {
    content: ' ';
    width: 70px;
    height: 2px;
    background: transparent linear-gradient(90deg, #c1c9e0 0%, #c1c9e000 100%);
    display: inline-block;
  }
  @media (max-width: 768px) {
    margin: 5%;
    width: 30%;
  }
`

export const UploadTextButton = styled(Button)`
  background: rgba(79, 139, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
  color: #5690ff;
  cursor: pointer;
  padding: 3% 6%;
  &:hover {
    background-color: #6499ff;
    color: #ffffff;
  }
  @media (max-width: 768px) {
  }
`
