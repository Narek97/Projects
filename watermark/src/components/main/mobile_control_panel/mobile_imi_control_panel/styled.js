import styled from 'styled-components'
import { Button } from '../../../../styled'

export const MobileImgControlPanel = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`

export const PagePanel = styled.div`
  height: 60%;
`

export const MobilePanelControl = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-columns: 34.3% 33.3% 33.3%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #dee3f0;
`

export const Opacity = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: inherit;
  &.active {
    background-color: #eef5ff;
  }
`
export const SingleOrTiled = styled(Opacity)`
  &.active {
    background-color: #eef5ff;
  }
`
export const ResponsivePadding = styled(Opacity)`
  &.active {
    background-color: #eef5ff;
  }
`
