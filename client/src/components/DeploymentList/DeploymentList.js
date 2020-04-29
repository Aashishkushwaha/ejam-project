import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getDeployments } from '../../redux/actions/deploymentActions';

const DeploymentList = ({deployments, getDeployments}) => {

  useEffect(() => {
    getDeployments();
  }, [])

  return (
    <div>
      <h1>DeploymentList</h1>
      {
        deployments.map(deployment => {
          return (
            <li key={deployment._id}>{deployment.version}</li>
          )
        })
      }
    </div>
  );
};

function mapStateToProps(state){
  return {
    deployments: state.deployment.deployments,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { getDeployments })(DeploymentList);
