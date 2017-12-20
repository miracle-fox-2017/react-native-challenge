import axios from 'axios'

export const get_news_all = (data) => {
  return {
    type: 'GET_NEWS',
    payload: {
      data
    }
  }
}

export const getNewsFromAPI = (dispatch) => {
  return (dispatch) => {
    const url = 'http://beta.newsapi.org/v2/everything?q=apple&from=2017-12-13&to=2017-12-13&sortBy=popularity&apiKey=6cbcfa7b1a324dd9907486a7bfcb51c7'
    axios.get(url)
    .then(({data}) => {
      dispatch(get_news_all(data.articles))
    })
    .catch(err => {
      console.log(err);
    })
  }
}
