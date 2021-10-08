import React from "react";
// import { NavLink } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import { Route, Switch, Redirect } from 'react-router-dom';


// core components
import AuthHeader from "views/ProfilePage/AuthHeader";
import Footer from "components/Footer/Footer.js";
import CreateProfile from "views/signupPage/SignupForm";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ViewProfile from "views/ProfilePage/viewProfile.js";

import DashboardContent from "views/DashboardPage/sections/dashboardContent";

export default function LandingPage({match}) {
    return (
        <div>
            <Notifications options = {{top:'20px', right:'0px', width: '100%', margin:0, left: 'none'}}/>
            <AuthHeader/>
            <div>
                <Switch>
                    <Route exact path={`${match.path}`} component={DashboardContent}/>
                    <Route path="/dashboard/create-profile" component={CreateProfile}/>
                    <Route path="/dashboard/profile-page/:id" component={ProfilePage}/>
                    <Route path="/dashboard/view-profile/:id" component={ViewProfile}/>
                    <Redirect to={`${match.url}`} />
                </Switch>
            </div>
            
            <Footer />
        </div>
    );
}
