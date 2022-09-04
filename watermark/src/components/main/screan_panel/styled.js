import styled from 'styled-components'

export const ScreanPanel = styled.div`
  width: 70%;
  border-left: 2px solid #dee3f0;
  padding: 2% 2.5%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
  }
`
export const Screan = styled.div`
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`

export const Img = styled.img`
  position: absolute;
  pointer-events: none;
  user-select: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
