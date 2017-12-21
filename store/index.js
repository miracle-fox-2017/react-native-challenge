import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import people from '../reducers'
const store = createStore(people, applyMiddleware(thunk))
export default store