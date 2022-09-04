import { useState, useEffect } from 'react'
import { onResize } from '../helperFunctions'
import { useDispatch, useSelector } from 'react-redux'
import {
  chageAudioChankStartEnd,
  chageAudioChankStart,
  chageAudioChankEnd,
} from '../redux/action'

export const useElementResize = (ref, containerRef, tipe, el, idx) => {
  const [initialTimerSize, setInitialTimerSize] = useState(null)

  const dispatch = useDispatch()
  const [isResizing, setIsResizing] = useState(false)
  const audioChunks = useSelector((state) => state.app.audioChunks)
  let time = null

  const elemetResize = (e) => {
    const data = onResize(
      e,
      ref,
      containerRef,
      tipe,
      audioChunks,
      idx,
      initialTimerSize
    )
    time = data
  }

  const onStopResize = () => {
    setIsResizing(false)
    let fn = () => {}

    if (tipe === 'center' && time) {
      fn = chageAudioChankStartEnd
    }
    if (tipe === 'left' && time) {
      fn = chageAudioChankStart
    }
    if (tipe === 'right' && time) {
      fn = chageAudioChankEnd
    }

    dispatch(fn(time, el.id))
  }

  const startResizing = () => {
    setInitialTimerSize({
      width: ref.current.getBoundingClientRect().width,
      left: ref.current.getBoundingClientRect().left,
    })
    setIsResizing(true)
  }

  const stopResizeLeave = () => {
    setIsResizing(false)
  }

  useEffect(() => {
    if (ref.current) {
      if (isResizing) {
        window.addEventListener('mousemove', elemetResize)
        window.addEventListener('mouseup', onStopResize)
        window.addEventListener('mouseleave', stopResizeLeave)
      }
    }

    return () => {
      window.removeEventListener('mousemove', elemetResize)
      window.removeEventListener('mouseup', onStopResize)
      window.removeEventListener('mouseleave', stopResizeLeave)
    }
  }, [ref, containerRef, isResizing]) // eslint-disable-line react-hooks/exhaustive-deps

  return startResizing
}
