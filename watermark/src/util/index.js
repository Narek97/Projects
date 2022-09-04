import { InitialControlPanel } from '../components/main/control_panel/initial_control_panel'
import { ImgControlPanel } from '../components/main/control_panel/img_control_panel'
import { TextControlPanel } from '../components/main/control_panel/text_control_panel'
import { SingleText } from '../UI/singleText'
import { MobileImgControlPanel } from '../components/main/mobile_control_panel/mobile_imi_control_panel'
import { SingleImg } from '../UI/singleImg'
import { Opacity } from '../UI/opacity'
import { CheckBox } from '../UI/checkBox'
import { Position } from '../UI/position'
import { Padding } from '../UI/padding'

export const pagesControlPanel = ({ type }) => {
  const data = {
    null: <InitialControlPanel />,
    image: <ImgControlPanel />,
    text: <TextControlPanel />,
  }
  return data[type]
}

export const pagesScreen = (type) => {
  const data = {
    image: <SingleImg />,
    text: <SingleText />,
  }
  return data[type]
}

export const mobilePagesControlPanel = ({ type }) => {
  const data = {
    null: <InitialControlPanel />,
    image: <MobileImgControlPanel />,
    // text: <TextControlPanel />,
  }
  return data[type]
}

export const mobileControlPanel = ({ type, state, dispatch }) => {
  const data = {
    opacity: <Opacity />,
    checkBoxPage: <CheckBox dispatch={dispatch} />,
    PositionPage: <Position />,
    Padding: <Padding dispatch={dispatch} />,
  }
  return data[type]
}
