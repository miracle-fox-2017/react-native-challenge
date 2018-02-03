export { GET_DATA, GET_DETAIL_DATA } from '../actions'

const initialState = {
  restaurantList: '',
  restaurantDetail: ''
}

export function resturantApp( state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        restaurantList: action.payload
      }
    case 'GET_DETAIL_DATA':
      return {
        ...state,
        restaurantDetail: action.payload
      }
    default:
      return state
  }
}
