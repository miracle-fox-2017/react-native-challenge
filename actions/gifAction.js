import axios from 'axios'

const getTrending = () => {
  return(dispatch) => {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=sKMWhStnyc6mWswAtjtKfKxS4x5sisKL&limit=30&rating=G')
    .then(({ data }) => {
      dispatch({
        type: 'GET_TRENDING',
        payload: data.data
      })
    })
    .catch(err => {
      return state
    })
  }

  // return ({
  //   type: 'GET_TRENDING'
  // })
}

export default actions = {
  getTrending
}
