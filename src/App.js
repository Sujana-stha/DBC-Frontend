import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Notifications  from 'react-notify-toast';
import "assets/scss/material-kit-react.scss?v=1.10.0";


// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpForm from "views/signupPage/userRegister";

import PrivateRoute from 'routes/ProtectedRoutes';
import AuthLayout from 'routes/AuthLayout'
var hist = createBrowserHistory();
function App() {
  return(
    <div>
      <Notifications options = {{top:'100px', right:'0px', width: '100%', margin:0, left: 'none'}}/>
    <Router history={hist}>
      <Switch>
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/login-page" component={LoginPage} />
        <PrivateRoute path= "/dashboard" component={AuthLayout} />
        <Route path="/component" component={Components} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
   
    </div>
  );
  
}

export default App;
 