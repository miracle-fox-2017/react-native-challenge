import axios from 'axios'

export const getAllNews = (newsData) => {
  let payload = newsData
  return {
    type: 'get_data',
    payload
  }
}

export const fetchDataApi = () => {
  console.log("Haloooooooooooooo")
  return (dispatch) => {
    axios.get('https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=f4dddfa962244898940d9ef5157889db')
      .then((response) => {
        console.log(response.data)
        dispatch(getAllNews(response.data.articles))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}