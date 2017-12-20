import axios from 'axios'

const url= "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5981474fde55432a9656bea68c9267bd"

export const getArticletechcrunch = (articles) => {
  return {
    type: 'GET_ARTICLE_TECHRUNCH',
    payload: {
      articles
    }
  }
}

//fungsi tarik berita techcrunch dari API
export function fetchnewstechrunch(dispatch) {
  return dispatch => {
    axios.get(url)
          .then(({data}) => {
            dispatch(getArticletechcrunch(data.articles))
          })
  }
}
