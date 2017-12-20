import { combineReducers } from 'redux'
import {compareFind as reducerFind} from './reducerFind'

const allReducers = combineReducers({
  reducerFind
})
export default allReducers