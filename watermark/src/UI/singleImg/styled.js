import styled from 'styled-components'

export const Resizable = styled.div`
  position: absolute;
  cursor: pointer;
  ${(props) => `
      width: ${props.data.width}px;
      height: ${props.data.height}px;
      left: ${props.data.left}px;
      top: ${props.data.top}px;
     
  `}
`
export const ResizerBottom = styled.div``
export const Resizers = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2px;
  &:active {
    box-shadow: 0 0 3px #00000033;
    border: 1px solid #5690ff;
  }
  &:hover {
    box-shadow: 0 0 3px #00000033;
    border: 1px solid #5690ff;
  }
  &:hover ${ResizerBottom} {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 3px #00000033;
    border: 1px solid #5690ff;
    position: absolute;
    right: -5px;
    bottom: -5px;
    cursor: nwse-resize;
  }
`

export const IMG = styled.div`
  height: 100%;
  width: 100%;
  user-select: none;
  ${(props) => `
      opacity:${props.data.opacity / 100};
      background: transparent url('${props.data.value}');
      background-repeat: no-repeat;
      background-position: center;
  `};
`
