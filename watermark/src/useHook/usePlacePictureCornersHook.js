import { useContext } from 'react'
import { DispatchContext, StateContext } from '../provider'
import { putPictureCanvasCorner } from '../reduser/action'

export const usePlacePictureCornersHook = () => {
  const { dispatch } = useContext(DispatchContext)
  const { state } = useContext(StateContext)
  const { width, height } = state.imageCropParams

  const screan = document.getElementById('screan')
  const screanWidth = screan.getBoundingClientRect().width
  const screanHeight = screan.getBoundingClientRect().height

  return (value) => {
    const ollPositionBorder = [
      { newTop: 10, newLeft: 10 },
      { newTop: 10, newLeft: screanWidth - width - 10 },
      { newTop: screanHeight - height - 10, newLeft: 10 },
      {
        newTop: screanHeight - height - 10,
        newLeft: screanWidth - width - 10,
      },
    ]
    const { newTop, newLeft } = ollPositionBorder[value]
    let el = document.getElementById('resizable')
    el.style.top = `${newTop}px`
    el.style.left = `${newLeft}px`

    dispatch(putPictureCanvasCorner({ newTop, newLeft }))
  }
}
