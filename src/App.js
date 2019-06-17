import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from "./components/Navigation/Navbar";
import Home from './components/Home/Home'
import PopsUpAction from "./components/PopsUp";

const App = () => {
  return (
      <div  className = "App">
        <PopsUpAction/>
            <Home/>
      </div>
  );
};

export default App;

