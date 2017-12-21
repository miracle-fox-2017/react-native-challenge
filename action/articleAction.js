import axios from 'axios'

function Articles(payload) {
  return {
      type: 'ARTICLES',
      payload : payload.articles
  }
}

export const getArticles = () => {
  return dispatch => {
    axios.get('https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey=7c22194db6574183a086c357016e6e6f')
    .then(({data}) => {
      dispatch(Articles(data))
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}