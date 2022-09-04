const zeroPad = (number) => `${number < 10 ? 0 : ''}${number}`

// TODO change constant names in your whole project!!!
export const Time = (duration) => {
  let hours = Math.floor(duration / 60 / 60)
  let minutes = Math.floor(duration / 60) - hours * 60
  let seconds = duration % 60

  hours = zeroPad(hours)
  minutes = zeroPad(minutes)
  seconds = zeroPad(seconds)

  return { hours, minutes, seconds }
}
