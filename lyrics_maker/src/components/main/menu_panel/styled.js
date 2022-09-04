import styled from 'styled-components'
import { scroll } from '../../../styled'
import { MENU_PANEL_WIDTH } from '../../../constants'

export const Container = styled.div`
  width: ${MENU_PANEL_WIDTH}px;
  border-right: 1px solid rgb(222, 227, 240);
  overflow: auto;
  ${scroll}
`

export const Img = styled.img`
  width: 15px;
`
export const Icon = styled.span`
  width: 15px;
  transition: 0.2s;
  cursor: pointer;
`

export const Text = styled.span`
  pointer-events: none;
  user-select: none;
`

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

export const InputContainer = styled.li`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0;
  border-bottom: 1px solid #dde3f0;
`

export const Input = styled.input`
  padding: 10px 5px;
  border: 1px solid #dde3f0;
  border-radius: 9px;
  text-align: center;
  color: #9aa6c8;
  &:focus {
    outline-style: none;
  }
`

export const Li = styled.li`
  margin: 0;
  height: 50px;
  overflow: hidden;
  transition: height 0.2s ease-in-out 0.2s;
  border-bottom: 1px solid #dde3f0;
  padding: 0 20px 0 10px;
  box-sizing: border-box;
  &.active {
    /* height: auto; */
    height: 460px;
  }

  &.active ${Icon} {
    transform: rotate(90deg);
  }
`

export const Div = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
  height: 50px;
  line-height: 40px;
  color: #252e48;
  transition: all 0.2s ease-in-out;
`
