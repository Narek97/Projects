import styled from 'styled-components'
import { button } from '../../../styled'

export const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 10px 10px 0px;
  box-sizing: border-box;
`

export const Audio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const Img = styled.img`
  width: 20px;
  padding: 0px 10px;
`

export const Button = styled.button`
  padding: 5px;
  display: flex;
  background-color: #ffffff;
  ${button}
`
export const TimeStart = styled.span`
  text-align: center;
  width: 95px;
  padding: 0 20px 4px 0;
  font-size: 17px;
`
export const TimeEnd = styled(TimeStart)`
  padding: 0 0 4px 20px;
`

export const TimeContainer = styled.div`
  width: 100%;
  background-color: #c8d8fd;
  overflow: hidden;
  position: relative;
`

export const TimeLine = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #5690fc;
  transform: ${(props) => `translate(${props.timePercent}%)`};
`

export const Input = styled.input`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
