var initialState = {
  bbcArticles: []
}

const bbcReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ARTICLES_BBC':
      state.bbcArticles = action.payload.articles
      return {...state}
    default:
      return state
  }
}

export default bbcReducer
