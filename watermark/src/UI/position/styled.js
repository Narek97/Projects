import styled from 'styled-components'
import { Button, Span } from '../../styled'

export const PositionContainer = styled.div`
  width: 100%;
  color: #7683a8;
  text-align: center;
  padding: 4%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom: 2px solid #dee3f0;
    padding: 0;
  }
`
export const Position = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`

export const Column = styled.div`
  &:before {
    content: ' ';
    position: relative;
    left: 3px;
    width: 25px;
    height: 8px;
    background: #bdcffb;
    border-radius: 2px;
    display: inline-block;
  }
  &:after {
    content: ' ';
    position: relative;
    right: 3px;
    width: 8px;
    height: 25px;
    background: #bdcffb;
    border-radius: 2px;
    display: inline-block;
  }
  transform: ${(props) => `rotate(${props.value}deg)`};
`

export const PositionBox = styled(Button)`
  padding: 3%;
  background: transparent linear-gradient(180deg, #fefeff 0%, #eff3ff 100%);
  border: 1px solid #d2e0fc;
  border-radius: 10px;
  cursor: pointer;
  transform: ${(props) => `rotate(${props.value}deg)`};

  &:hover ${Column} {
    &:before {
      background: #ffffff;
    }
    &:after {
      background: #ffffff;
    }
  }
  &:hover {
    background: transparent linear-gradient(180deg, #6391f7 0%, #497ef7 100%);
  }
  &.active ${Column} {
    &:before {
      background: #ffffff;
    }
    &:after {
      background: #ffffff;
    }
  }
  &.active {
    background: transparent linear-gradient(180deg, #6391f7 0%, #497ef7 100%);
  }
`
export const Title = styled(Span)``
