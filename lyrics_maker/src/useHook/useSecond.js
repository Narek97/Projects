export const second = (val) => {
  let hours = parseInt(val.split(':')[0]) * 60 * 60
  let minutes = parseInt(val.split(':')[1]) * 60
  let seconds = val.length > 6 ? parseInt(val.split(':')[2]) : 0
  return hours + minutes + seconds
}
