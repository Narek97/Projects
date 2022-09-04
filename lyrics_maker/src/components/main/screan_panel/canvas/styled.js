import styled from 'styled-components'
import { LYRICS_PANEL_WIDTH, MENU_PANEL_WIDTH } from '../../../../constants'

export const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
`

export const Div1 = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  min-height: 100%;
  flex: 1 1 0%;
  overflow: auto;
  overscroll-behavior: contain;
  padding: 0 10px;
  box-sizing: border-box;
`
export const Div2 = styled.div`
  flex: 0 0 auto;
  margin: auto;
  width: ${(props) =>
    `${props.width - LYRICS_PANEL_WIDTH - MENU_PANEL_WIDTH}px`};

  height: ${(props) =>
    `${(props.width - LYRICS_PANEL_WIDTH - MENU_PANEL_WIDTH) / 1.8}px`};
  background-color: rgb(255, 255, 255);
  position: relative;
  pointer-events: initial;
`
export const Div3 = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
`
export const Div4 = styled.div`
  transform-origin: left top;
  overflow: hidden;
  pointer-events: initial !important;
  font-size: 50px;
  ${(props) => `
      width: ${props.canvasWidth}px;
      height: ${props.canvasHeight}px;
      background: transparent url('${props.imageUrl}');
      background-repeat: no-repeat;
      background-position: center;
      transform: scale(${
        (props.width - LYRICS_PANEL_WIDTH - MENU_PANEL_WIDTH) /
        props.canvasWidth
      });
  `};
`
