const initialState = {
	heroes: []
}
function heroReducer(state=initialState, action){
	switch(action.type) {
		case 'GET_HEROES':
			return state = {...state, heroes:action.payload}
		default:
			return state
	}
}

export default heroReducer