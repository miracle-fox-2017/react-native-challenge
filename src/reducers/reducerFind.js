const initialState = {
  suggest: [],
  compare: [],
  specification: ''
}
export const compareFind = (state = initialState, action) => {
  console.log(action, "INBI ACTION")
  switch (action.type) {
    case 'GET_SUGGEST':
      state.suggest = action.listSuggest
      return {...state}
    case 'GET_COMPARE':
      return state
    case 'GET_SPECIFICATION':
      return state
    default:
      return state
  }
}