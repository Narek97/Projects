import { useState, useEffect } from 'react'
// import url from '../audio/in-da-club.mp3'

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url))

  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause()
    }
  }, [playing, audio])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle, audio]
}
