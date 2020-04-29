import React, { useState } from "react";
import { connect } from "react-redux";
import { addDeployment } from "../../redux/actions/deploymentActions";

const DeploymentForm = (props) => {
  // useEffect(() => {
  //   props.addDeployment();
  // }, [])
  const initialState = {
    url: '',
    templateName: '',
    version: ''
  }

  const [ state, setState ] = useState(initialState)

  const onChangeHandler = e => {
    setState({
      ...state, [e.target.id]: e.target.value
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(state);
    props.addDeployment(state);
    setState(initialState);
  }

  return (
    <div>
      <main>
        <h1>Deployment Form</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="url">Url : </label>
            <input
              type="url"
              id="url"
              value={state.url}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="templateName">Template Name : </label>
            <input
              type="text"
              id="templateName"
              value={state.templateName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="version">Version : </label>
            <input
              type="text"
              id="version"
              value={state.version}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <button type="submit"> Deploy </button>
          </div>
        </form>
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    deployments: state.deployment.deployments,
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { addDeployment })(DeploymentForm);
