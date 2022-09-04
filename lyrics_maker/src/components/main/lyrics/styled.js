import styled from 'styled-components'
import { button, scroll } from '../../../styled'
import { LYRICS_PANEL_WIDTH } from '../../../constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${LYRICS_PANEL_WIDTH}px;
  border-left: 1px solid rgb(222, 227, 240);
  overflow: auto;
  background-color: #0052e01a;
  ${scroll}
`

export const Add = styled.button`
  display: flex;
  align-items: center;
  width: 150px;
  padding: 10px 25px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 25px;
  color: rgba(37, 46, 72, 0.59);
  background-color: #ffffff;
  ${button}
`
