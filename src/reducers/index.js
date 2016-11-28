import { combineReducers } from 'redux';
import board from './board';
import numberReducer from './numberReducer';

export default combineReducers({
  board,
  number: numberReducer
})
