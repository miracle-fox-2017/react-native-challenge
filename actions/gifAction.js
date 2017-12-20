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
}

const random = () => {
  return(dispatch) => {
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=sKMWhStnyc6mWswAtjtKfKxS4x5sisKL&tag=&rating=G')
    .then(({ data }) => {
      console.log('random')
      dispatch({
        type: 'GET_RANDOM',
        payload: data.data
      })
    })
    .catch(err => {
      return state
    })
  }
}

export default actions = {
  getTrending,
  random
}
