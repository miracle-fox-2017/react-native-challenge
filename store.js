import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 	'redux-thunk'
import rootReducers from './reducers'


const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(rootReducers,composeEnhancers(middleware))

export default store