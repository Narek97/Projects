import styled, { css } from 'styled-components'

const Div = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 15px;
  background: rgba(118, 109, 232, 1);
  /* cursor: e-resize; */
  user-select: none;
`

export const Container = styled.div`
  margin-top: 40px;
  height: 40px;
  border-radius: 3px;
  width: 100%;
  background-color: rgb(207, 224, 255);
  position: relative;
`

export const TimeRuler = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 40px;
`

export const TimeRulerMinut = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-image: repeating-linear-gradient(
    90deg,
    rgb(185, 207, 255),
    rgb(185, 207, 255) 1px,
    transparent 1px,
    transparent 4%
  );
  height: 5px;
`
export const TimeRulerSecont = styled(TimeRulerMinut)`
  background-image: repeating-linear-gradient(
    90deg,
    rgb(185, 207, 255),
    rgb(185, 207, 255) 1px,
    transparent 1px,
    transparent 20%
  );
  height: 10px;
`

export const TimeLinesItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  background: rgba(118, 109, 232, 0.4);

  ${(props) => `
      left:${(props.left / 143) * 100}%;
      width:${((props.right - props.left) / 143) * 100}%;
  `};
`

export const CenterButton = styled.span`
  width: 25px;
  position: absolute;
  color: #ffffff;
  cursor: grab;
  user-select: none;
`

export const LeftButton = styled.div`
  left: 0;
  ${Div}
`

export const RightButton = styled.div`
  right: 0;
  ${Div}
`

export const Icon = styled.span`
  color: #ffffff;
  transition: 0.2s;
`
