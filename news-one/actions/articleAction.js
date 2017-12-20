import axios from 'axios'

export const fetchArticles = (page) => {
  return (dispatch) => {
    const url = 'http://wptavern.com/wp-json/wp/v2/posts?_embed&page='+page
    axios.get(url)
      .then(({ data }) => {
        dispatch({
          type: 'FETCH_ARTICLES',
          payload: {
            newsList: data,
            isLoading: false,
            isRefreshing: false
          }
        })

      }).catch(err => console.error({ message: 'Something wrong fetching news', error: err.message }));
  }
}