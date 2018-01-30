import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import HomeReducer from './reducers/home'
import DetailReducer from './reducers/detail'

const appReducers = combineReducers({
  HomeReducer,
  DetailReducer
})

const middleware = applyMiddleware(thunk)

export default store = createStore(appReducers, middleware)
