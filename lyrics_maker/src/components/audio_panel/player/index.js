import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import * as Styled from './styled'
import Pause from '../../../img/pause.png'
import Play from '../../../img/play.png'
import Left from '../../../img/rotate-left.png'
import Right from '../../../img/rotate-right.png'
import { Time } from '../../../useHook/useTime'
import AudioChanks from '../audio_chanks'

const Player = ({ url, duration }) => {
  const audio = useRef(null)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const timePercent = -100 + (currentTime / dur) * 100
  const {
    hours: hoursStart,
    minutes: minutesStart,
    seconds: secondsStart,
  } = Time(Math.ceil(currentTime))
  const { hours: hoursEnd, minutes: minutsEnd, seconds: secondsEnd } = Time(
    duration
  )

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()

  const handleProgress = (e) => {
    let compute = Math.ceil((e.target.value * dur) / 100)
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  return (
    <Styled.Container>
      <Styled.Audio>
        <Styled.TimeStart>
          {hoursStart}:{minutesStart}:{secondsStart}
        </Styled.TimeStart>
        <Styled.Button
          onClick={() => {
            setCurrentTime((prevCount) => prevCount - 5)
            audio.current.currentTime = currentTime - 5
          }}
        >
          -5s <Styled.Img src={Left} alt="Left" />
        </Styled.Button>
        <Styled.Button onClick={toggleAudio}>
          {audio.current.paused ? (
            <Styled.Img src={Play} alt="Play" />
          ) : (
            <Styled.Img src={Pause} alt="Pause" />
          )}
        </Styled.Button>
        <audio
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onCanPlay={(e) => setDur(e.target.duration)}
          ref={audio}
          type="audio/mpeg"
          preload="true"
          src={url}
        />
        <Styled.Button>
          <Styled.Img
            src={Right}
            alt="Right"
            onClick={() => {
              setCurrentTime((prevCount) => prevCount + 5)
              audio.current.currentTime = currentTime + 5
            }}
          />
          +5s
        </Styled.Button>
        <Styled.TimeEnd>
          {hoursEnd}:{minutsEnd}:{secondsEnd}
        </Styled.TimeEnd>
      </Styled.Audio>

      <Styled.TimeContainer>
        <Styled.TimeLine timePercent={timePercent} />
        <Styled.Input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
      </Styled.TimeContainer>
      <AudioChanks />
    </Styled.Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  url: state.app.audioUrl,
  duration: state.app.duration,
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)
