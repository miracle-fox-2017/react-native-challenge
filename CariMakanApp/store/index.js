import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { resturantApp } from '../reducer'

const middleWare = applyMiddleware(thunk)
export const store = createStore(resturantApp, middleWare)
