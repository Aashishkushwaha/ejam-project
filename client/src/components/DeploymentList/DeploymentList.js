import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDeployments,
  removeDeployment,
} from "../../redux/actions/deploymentActions";
import { Accordion, Card, Button } from "react-bootstrap";

const DeploymentList = ({ deployments, getDeployments, removeDeployment }) => {
  useEffect(() => {
    getDeployments();
  }, []);

  const onDeleteHandler = (id) => {
    removeDeployment(id);
  };

  return (
    <div>
      <fieldset>
        <legend>Deployment List</legend>
        {!deployments.length && (
          <h5 className="error">No deployments yet ...</h5>
        )}
        {deployments.map((deployment, index) => {
          return (
            <Accordion defaultActiveKey={index} key={deployment._id}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={index}>
                  <Button
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: ".55rem",
                      padding: ".15rem .40rem",
                    }}
                    variant="danger"
                    onClick={() => onDeleteHandler(deployment._id)}
                  >
                    Delete
                  </Button>
                  {deployment.templateName}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <span style={{ display: "block" }} key={index}>
                      URL : <a href={deployment.url} target="_blank">{deployment.url}</a>
                    </span>
                    {deployment.version.map((version, index) => (
                      <span style={{ display: "block" }} key={index}>
                        version : {version}{" "}
                      </span>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
      </fieldset>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    deployments: state.deployment.deployments,
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { getDeployments, removeDeployment })(
  DeploymentList
);
