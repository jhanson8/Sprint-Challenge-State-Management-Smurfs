// const initialState = {
//   isLoading: false,
//   smurf: null,
//   error: ''
// };
//
// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCHING_SMURF_START':
//       return {
//         ...state,
//         isLoading: true
//       };
//     case 'FETCHING_DATA_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//       smurf: action.payload
//       };
//     default:
//       return state;
//   }
// };
import { combineReducers } from 'redux';
import { reducer } from './fetchReducer';
import { postReducer } from './postReducer.js';

export default combineReducers({
reducer,
  postReducer
});
