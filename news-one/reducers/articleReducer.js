const initialState = {
  newsList: [],
  isLoading: false,
  isRefreshing: false
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      const loadNewsList =  state.newsList.concat(action.payload.newsList)
      return { ...state, newsList: loadNewsList }
      return state
    default:
      return state
  }
}
