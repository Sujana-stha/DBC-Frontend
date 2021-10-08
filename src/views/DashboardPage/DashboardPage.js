import React from "react";
// import { NavLink } from 'react-router-dom';
import Notifications from 'react-notify-toast'


// core components
import AuthHeader from "../ProfilePage/AuthHeader";
import Footer from "components/Footer/Footer.js";


import DashboardContent from "./sections/dashboardContent";


export default function LandingPage() {
    return (
        <div>
            <Notifications options = {{top:'20px', right:'0px', width: '100%', margin:0, left: 'none'}}/>
            <AuthHeader/>
            <DashboardContent/>
            <Footer />
        </div>
    );
}
