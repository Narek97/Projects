export const chageStartAndEnd = (drafState, action) => {
  const el = drafState.audioChunks.find((el) => el.id === action.payload.id)
  el.end += action.payload.val - el.start
  el.start = action.payload.val
}
