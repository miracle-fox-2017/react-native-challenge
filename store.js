import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import HomeReducer from './reducers/home'

const appReducers = combineReducers({
  HomeReducer
})

const middleware = applyMiddleware(thunk)

export default store = createStore(appReducers, middleware)
