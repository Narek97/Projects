import React from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'
import Aligment from '../../../../UI/aligment'
import Color from '../../../../UI/color'
import FontFamily from '../../../../UI/font_family'
import Opacity from '../../../../UI/opacity'
import Properties from '../../../../UI/properties'
import Size from '../../../../UI/size'

function TextStyle() {
  return (
    <>
      <FontFamily />
      <Styled.Div>
        <Color /> <Size />
      </Styled.Div>
      <Properties />
      <Aligment />
      <Opacity />
    </>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  state: state.app,
})

export default connect(mapStateToProps, mapDispatchToProps)(TextStyle)
