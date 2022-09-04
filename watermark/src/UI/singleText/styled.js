import styled from 'styled-components'

export const Frame = styled.div`
  position: absolute;
  user-select: none;
  /* word-break: break-all; */
  &:hover {
    box-shadow: 0 0 3px #00000033;
    border: 1px solid #5690ff;
    cursor: pointer;
  }
  ${(props) => `
        top:${props.allData.imageCropParams.top}px;
        left:${props.allData.imageCropParams.left}px;
        color:${props.allData.color};
        font-size:${props.allData.fontSize}px;
        font-family: ${props.allData.fontPath};
    `}
`
