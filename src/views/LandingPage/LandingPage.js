import React from "react";
import {NavLink} from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import AuthHeader from '../ProfilePage/AuthHeader'

//images
import Logo from "../../assets/img/changedLogo.png"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {window.localStorage.getItem('access_token') ? <AuthHeader/>:
      <Header
        color="white"
        routes={dashboardRoutes}
        brand={<img src={Logo} className={classes.navLogo}/>}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      }
      <Parallax filter image={require("assets/img/banner-img.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Diaspora Business Connections.</h1>
              <h4>
                Diaspora Business Connection is the corporation that target to supports cross border business and act as bridge between enterpreneurs, partners and Business person.
              </h4>
              <br />
              <NavLink to="/sign-up">
              <Button
                color="primary"
                size="lg"
              >
                {/* <i className="fas fa-play" /> */}
                Get Started !
              </Button>
              </NavLink>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
