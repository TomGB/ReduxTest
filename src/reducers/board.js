const initialState = {
  pieces: [34,2,3,4]
}

export default function board(state = initialState, action){
  switch (action.type) {
    case 'BEANS':
      var newPieces = state.pieces;
      newPieces[action.index]+=1
      return {
        pieces: newPieces
      }
      break;
    default:
      return state
  }
}
