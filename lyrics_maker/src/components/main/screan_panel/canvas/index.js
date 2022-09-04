import React from 'react'
import { connect } from 'react-redux'
import { useWindowSize } from '../../../../useHook/useWindowSize'
import * as Styled from './styled'

const CanvasPanel = ({ imageUrl, canvasHeight, canvasWidth, text }) => {
  const [width, height] = useWindowSize()

  return (
    <Styled.Container>
      <Styled.Div1>
        <Styled.Div2 width={width} height={height}>
          <Styled.Div3>
            <Styled.Div4
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
              imageUrl={imageUrl}
              width={width}
              height={height}
            >
              <span>{text[0].textParams.text}</span>
            </Styled.Div4>
          </Styled.Div3>
        </Styled.Div2>
      </Styled.Div1>
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  imageUrl: state.app.imageUrl,
  canvasHeight: state.app.canvasHeight,
  canvasWidth: state.app.canvasWidth,
  text: state.app.audioChunks,
})

export default connect(mapStateToProps, mapDispatchToProps)(CanvasPanel)
