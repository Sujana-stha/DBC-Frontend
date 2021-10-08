import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Notifications from 'react-notify-toast';

//COMPONENTS
import LandingPage from "views/LandingPage/LandingPage";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpForm from "views/signupPage/userRegister";

export default function PublicRoutes(props) {
    return(
    <div>
        <Notifications options = {{top:'20px', right:'0px', width: '100%', margin:0, left: 'none'}}/>
        <Switch>
            <Route path="/" component={LandingPage}/>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpForm} />
            <Redirect to ="/dashboard"/>
        </Switch>
    </div>
    )
}

