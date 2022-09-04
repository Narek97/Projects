import {
  ADD_AUDIO_CHUNK,
  DELET_AUDIO_CHUNK,
  CHANGE_AUDIO_CHUNK_TEXT,
  CHANGE_AUDIO_CHUNK_START,
  CHANGE_AUDIO_CHUNK_END,
  CHANGE_AUDIO_CHUNK_START_END,
} from './types'

export const addNewAudioChunk = (start, duration) => {
  return {
    type: ADD_AUDIO_CHUNK,
    payload: { start, duration },
  }
}

export const deletAudioChunk = (id) => {
  return {
    type: DELET_AUDIO_CHUNK,
    payload: id,
  }
}

export const chageAudioChankText = (val, id) => {
  return {
    type: CHANGE_AUDIO_CHUNK_TEXT,
    payload: { val, id },
  }
}

export const chageAudioChankStart = (val, id) => {
  return {
    type: CHANGE_AUDIO_CHUNK_START,
    payload: { val, id },
  }
}
export const chageAudioChankEnd = (val, id) => {
  return {
    type: CHANGE_AUDIO_CHUNK_END,
    payload: { val, id },
  }
}

export const chageAudioChankStartEnd = (val, id) => {
  return {
    type: CHANGE_AUDIO_CHUNK_START_END,
    payload: { val, id },
  }
}
