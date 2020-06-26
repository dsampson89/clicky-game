import React from "react";
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/MainGameContainer";
import "./index.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer /> 
  </div>
);

export default App;
