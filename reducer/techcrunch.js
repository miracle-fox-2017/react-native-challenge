var initialState = {
  techcrunchArticles: []
}

const techcrunchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ARTICLE_TECHRUNCH':
      state.techcrunchArticles = action.payload.articles
      return {...state}
    default:
      return state
  }
}

export default techcrunchReducer
