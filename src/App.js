import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Navbar from "./components/Navigation/Navbar";
import * as ROUTES from './components/Navigation/ConstantRoute'
import Home from './components/Home/Home'
import User from './components/User/User'
import Login from './components/SignIn/SignIn'
import SignUp from './components/SignUp/Register'
import Notfound from './components/NotFound'
const App = () => {
  return (
    <Router>
      <div  className = "App">
        <Navbar />
        <Switch>
            <Route exact path = {ROUTES.LandingPage} component = {Home}></Route>
            <Route path = {ROUTES.Users} component = {User}></Route>
            <Route path = {ROUTES.Sign_In } component = {Login}></Route>
            <Route path = {ROUTES.Sign_Up } component = {SignUp}></Route>
            <Route component={Notfound} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;

