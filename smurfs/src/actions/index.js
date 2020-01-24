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


const apiUrl = 'http://localhost:3333/smurfs';

export const createPost = ({ name, age, height }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {name, age, height})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: 'ADD_POST',
    payload: {
      name: data.name,
      age: data.age ,
      height: data.height
    }
  }
};
