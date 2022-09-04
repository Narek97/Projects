import { useState, useEffect } from 'react'
import { DispatchContext, StateContext } from '../provider/index'
import { useContext } from 'react'
import { changePictureSize } from '../reduser/action'

const minSize = 20

export const useElementResize = (ref) => {
  const { dispatch } = useContext(DispatchContext)
  const { state } = useContext(StateContext)
  const [isResizing, setIsResizing] = useState(false)
  const [originalMouseX, setOriginalMouseX] = useState(0)
  let size = minSize

  const onResize = (e) => {
    const element = ref.current
    const newSize = state.imageCropParams.width + (e.pageX - originalMouseX)

    size = newSize

    if (newSize >= minSize) {
      element.style.width = `${newSize}px`
      element.style.height = `${newSize}px`
    }
  }

  const onStopResize = () => {
    setIsResizing(false)
    dispatch(changePictureSize({ newSize: { width: size, height: size } }))
    window.removeEventListener('mousemove', onResize)
  }

  const startResizing = (e) => {
    setOriginalMouseX(e.pageX)
    setIsResizing(true)
  }

  const stopResizeLeave = () => {
    setIsResizing(false)
    window.removeEventListener('mousemove', onResize)
  }

  useEffect(() => {
    if (ref.current) {
      if (isResizing) {
        window.addEventListener('mousemove', onResize)
        window.addEventListener('mouseup', onStopResize)
        window.addEventListener('mouseleave', stopResizeLeave)
      }
    }

    return () => {
      window.removeEventListener('mousemove', onResize)
      window.removeEventListener('mouseup', onStopResize)
      window.removeEventListener('mouseleave', stopResizeLeave)
    }
  }, [ref, isResizing]) // eslint-disable-line react-hooks/exhaustive-deps

  return startResizing
}
