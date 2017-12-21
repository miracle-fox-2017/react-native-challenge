const initialState = {
    lastArticles: []
  }
  
  function ArticleReducer(state = initialState, action) {
    if (action.type === 'ARTICLES') {
      return {...state, lastArticles: action.payload}
    }
    return state
  }
  
  export default ArticleReducer