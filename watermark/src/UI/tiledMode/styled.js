import styled from 'styled-components'

export const TiledMode = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Img = styled.img`
  ${(props) => `
        width :${props.allData.imageCropParams.width}px;
        height :${props.allData.imageCropParams.height}px;
    
    `}
`

export const Text = styled.span``

export const TiledImg = styled.div`
  width: auto;
  height: auto;
  background-repeat: inherit;
  ${(props) =>
    props.data.value !== '' &&
    `
        opacity:${props.data.opacity / 100};
        margin: ${props.data.padding}px;
        color:${props.data.color};
        font-size:${props.data.fontSize}px;
        font-family: ${props.data.fontPath};
        color:${props.data.color};
    `}
`
