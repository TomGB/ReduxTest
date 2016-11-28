const initialState = {
  number: 1
}

export default function board(state = initialState, action){
  console.log(state)
  switch (action.type) {
    case 'ADD':
      return {
        number: state.number + 1
      }
      break;
    default:
      return state
  }
}
