import { createStore, applyMiddleware } from 'redux'
import ArticleReducer from '../reducer/reducer' 
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let middleware = applyMiddleware(thunk, logger)
let store = createStore(ArticleReducer, middleware)

export default store