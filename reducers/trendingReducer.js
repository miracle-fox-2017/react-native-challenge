const initialState = {
  trending: [],
  random: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRENDING':
      return {...state, trending: action.payload}
    case 'GET_RANDOM':
      console.log('here', action.payload)
      return {...state, random: action.payload}
    default:
      return state
  }
}

export default reducer
