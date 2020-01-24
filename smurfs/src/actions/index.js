import axios from 'axios';

export const fetchSmurf = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_SMURF_START' });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        //res.data ==> activity
        dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data });
      })
      .catch(err => console.log(err));
  };
};
