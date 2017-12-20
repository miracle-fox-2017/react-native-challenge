const initialState = {
  trending: [],
  images: ['helooo']
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_TRENDING':
      return {...state, trending: action.payload}
    default:
      return state
  }
}

export default reducer
