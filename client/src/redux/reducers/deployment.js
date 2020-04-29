import {
  GET_DEPLOYMENTS,
  ADD_DEPLOYMENT,
  REMOVE_DEPLOYMENT
} from '../actions/types';

let initialState = {
  deployments: []
}

let deploymentReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_DEPLOYMENT: 
      return [...state, action.payload]
    case GET_DEPLOYMENTS: 
      return {...state, deployments: action.payload}
    case REMOVE_DEPLOYMENT: return state
    default: return state
  }
}

export default deploymentReducer;