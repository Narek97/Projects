import styled from 'styled-components'
import { Span, Flex } from '../../styled'

export const CheckBoxContainer = styled(Flex)`
  flex-direction: column;
  color: #7683a8;
  border-bottom: 2px solid #dee3f0;
  @media (max-width: 768px) {
    height: 100%;
  }
`

export const Switches = styled.div`
  display: flex;
  padding-top: 3%;
  &:before {
    content: 'Single';
    margin-right: 10px;
    ${(props) => (props.mode === 'single' ? `color:#545F7E` : `color:#848DA4`)}
  }
  &:after {
    content: 'Tiled';
    margin-left: 10px;
    ${(props) => (props.mode === 'tiled' ? `color:#545F7E` : 'color:#848DA4')};
  }
`

export const CheckBoxWrapper = styled.div`
  position: relative;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 20px;
  border-radius: 15px;
  background: #387dff;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 35px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 19px;
      transition: 0.2s;
    }
  }
`

export const Title = styled(Span)``
