import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import styles from "assets/jss/material-kit-react/views/landingPage.js";

//content
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import BasicInfo from './section/BasicInfo'

//images
import Logo from "../../assets/img/changedLogo.png"
import Footer from 'components/Footer/Footer';

const headerStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function Register(props) {
  const HeaderClasses = headerStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand={<img src={Logo} className={HeaderClasses.navLogo} />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div style={{marginTop: "15%"}}>
        <BasicInfo/>
      </div>
      
      <Footer/>
    </div>
  );
}
