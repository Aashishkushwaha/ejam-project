import {
  GET_DEPLOYMENTS,
  ADD_DEPLOYMENT,
  // REMOVE_DEPLOYMENT,
  GET_ERRORS,
} from "../actions/types";
import axios from "axios";

export const getDeployments = () => (dispatch) => {
  axios
    .get("http://localhost:4500/api/deployments/get")
    .then((res) => {
      dispatch({ type: GET_DEPLOYMENTS, payload: res.data });
    })
    .catch((error) => {
      console.log('get error : ', error);
      dispatch({ type: GET_ERRORS, errors: error.response.data });
    });
};

export const addDeployment = (deployment) => dispatch => {
  console.log('inside add : ' , deployment)
  axios
    .post("http://localhost:4500/api/deployments/add", deployment)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_DEPLOYMENT, payload: res.data });
    })
    .catch((error) => {
      console.log('inside add error', JSON.stringify(error));
      dispatch({ type: GET_ERRORS, errors: error.response.data });
    });
}