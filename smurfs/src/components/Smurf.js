import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchSmurf } from '../actions';


const Smurf = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.fetchSmurf}>Get Smurf</button>
      {!props.smurf && !props.isLoading && (
        <h2>Fetch village!</h2>
      )}
      {props.isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <h3>Smurf Name & Info:</h3>

       {props.smurf && !props.isLoading && <h2>{props.smurf[0].name}</h2>}

    </div>


  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurf: state.smurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(Smurf);
