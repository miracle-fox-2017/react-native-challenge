const allPeople = []

const personReducer = (state = allPeople, actions) => {
  switch (actions.type) {
    case 'GET_ALL_HEROES':
      return state.concat(actions.payload)
    default:
      return state
  }
}

export default personReducer