const initialState = {
  news: []
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_data':
      return { ...state, news: action.payload }
    default:
      return state
  }
}

export default newsReducer