import React, { useContext, useState } from 'react'
import * as Styled from './styled'
import { OPACITY_URL } from '../../../../constants'
import PADDING_URL from '../../../../img/Padding.svg'
import TILED_URL from '../../../../img/Tiled.svg'
import POSITION_URL from '../../../../img/Possition.svg'
import { DispatchContext, StateContext } from '../../../../provider'
import { mobileControlPanel } from '../../../../util'

export const MobileImgControlPanel = () => {
  const { dispatch } = useContext(DispatchContext)
  const { state } = useContext(StateContext)
  const [type, setType] = useState('opacity')

  return (
    <Styled.MobileImgControlPanel>
      <Styled.PagePanel>
        {mobileControlPanel({ type, state, dispatch })}
      </Styled.PagePanel>

      <Styled.MobilePanelControl>
        <Styled.ButtonContainer onClick={() => setType('opacity')}>
          <Styled.Opacity className={`${type === 'opacity' && 'active'}`}>
            <img width="15" src={OPACITY_URL} alt="" />
            Opacity
          </Styled.Opacity>
        </Styled.ButtonContainer>

        <Styled.ButtonContainer onClick={() => setType('checkBoxPage')}>
          <Styled.SingleOrTiled
            className={`${type === 'checkBoxPage' && 'active'}`}
          >
            <img width="15" src={TILED_URL} alt="" />
            Mode
          </Styled.SingleOrTiled>
        </Styled.ButtonContainer>

        {state.mode === 'single' ? (
          <Styled.ButtonContainer onClick={() => setType('PositionPage')}>
            <Styled.ResponsivePadding
              className={`${type === 'PositionPage' && 'active'}`}
            >
              <img width="15" src={POSITION_URL} alt="" />
              Position
            </Styled.ResponsivePadding>
          </Styled.ButtonContainer>
        ) : (
          <Styled.ButtonContainer onClick={() => setType('Padding')}>
            <Styled.ResponsivePadding
              className={`${type === 'Padding' && 'active'}`}
            >
              <img width="15" src={PADDING_URL} alt="" />
              Padding
            </Styled.ResponsivePadding>
          </Styled.ButtonContainer>
        )}
      </Styled.MobilePanelControl>
    </Styled.MobileImgControlPanel>
  )
}
