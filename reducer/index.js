import { combineReducers } from 'redux'
import bbcReducer from './bbc'
import techcrunchReducer from './techcrunch'

const rootReducer = combineReducers({
  bbcReducer,
  techcrunchReducer
})

export default rootReducer
