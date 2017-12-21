import axios from 'axios'

const http = axios.create({
  baseURL: 'https://swapi.co/api'
})

export const getHeroes = (heroes) => {
  return {
    type: 'GET_ALL_HEROES',
    payload: heroes
  }
}

export const getAllHeroes = () => {
  return (dispatch) => {
    http.get('/people')
    .then(({data}) => {
      console.log('isi datanya ', data.results)
      dispatch(getHeroes(data.results))
    })
    .catch(err => console.error(err))
  }
}