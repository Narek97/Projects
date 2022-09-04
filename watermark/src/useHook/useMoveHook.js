import { useContext, useState, useEffect } from 'react'
import { DispatchContext, StateContext } from '../provider/index'
import { changePictureCoordinates } from '../reduser/action'

export const useMoveHook = (ref) => {
  const { dispatch } = useContext(DispatchContext)
  const { state } = useContext(StateContext)
  const [isStart, setIsStart] = useState(false)
  const [originalMouse, setOriginalMouse] = useState({ X: 0, Y: 0 })

  let newLeft = 10
  let newTop = 10

  const useDragAndDrop = (e) => {
    const initialLeft = state.imageCropParams.left
    const initialTop = state.imageCropParams.top
    const { X, Y } = originalMouse
    newLeft = initialLeft + (e.pageX - X)
    newTop = initialTop + (e.pageY - Y)

    if (ref.current) {
      ref.current.style.left = `${newLeft}px`
      ref.current.style.top = `${newTop}px`
    }
  }
  const StopUseDragAndDrop = () => {
    setIsStart(false)
    dispatch(changePictureCoordinates({ newLeft, newTop }))
    window.removeEventListener('mousemove', useDragAndDrop)
  }

  const StopLeaveUseDragAndDrop = () => {
    setIsStart(false)
    window.removeEventListener('mousemove', useDragAndDrop)
  }

  const startUseDragAndDrop = (e) => {
    setIsStart(true)
    setOriginalMouse({ X: e.pageX, Y: e.pageY })
  }

  useEffect(() => {
    if (isStart) {
      window.addEventListener('mousemove', useDragAndDrop)
      window.addEventListener('mouseup', StopUseDragAndDrop)
      window.addEventListener('mouseleave', StopLeaveUseDragAndDrop)
    }

    return () => {
      window.removeEventListener('mousemove', useDragAndDrop)
      window.removeEventListener('mouseup', StopUseDragAndDrop)
      window.removeEventListener('mouseleave', StopLeaveUseDragAndDrop)
    }
  }, [ref, isStart]) // eslint-disable-line react-hooks/exhaustive-deps

  return startUseDragAndDrop
}
