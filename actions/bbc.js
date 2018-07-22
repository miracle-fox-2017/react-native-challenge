import axios from 'axios'

const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd"

export const getArticlesbbc = (articles) => {
  return {
    type: 'GET_ARTICLES_BBC',
    payload: {
      articles
    }
  }
}

// fungsi tarik data
export function fetchnewsbbc(dispatch) {
  return dispatch => {
    axios.get(url)
    .then(({data}) => {
      console.log('yihaa', dispatch)
      dispatch(getArticlesbbc(data.articles))
    })
  }
}
