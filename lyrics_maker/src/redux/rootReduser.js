import { combineReducers } from 'redux'
import { appReducer } from './appReduser'

export const rootReducer = combineReducers({
  app: appReducer,
})
