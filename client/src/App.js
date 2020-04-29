import React from "react";
import DeploymentForm from "./components/DeploymentForm/DeploymentForm";
import DeploymentList from "./components/DeploymentList/DeploymentList";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Deployments</h1>
        <DeploymentForm />
        <DeploymentList />
      </div>
    </Provider>
  );
}

export default App;
