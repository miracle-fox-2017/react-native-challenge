const initialState = {
  news: [],
}

const News = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {...state, news: action.payload.data}
    default:
      return state
  }
}

export default News
