import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

export function games(payload) {
  return {
    type: 'GET_ALL_GAMES',
    payload
  }
}

export function getAllGames(){
  return dispatch => {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&limit=20')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      dispatch(games(gameList))
    })
  }
}
