import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import Business from "@material-ui/icons/Business";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk About us</h2>
          <h5 className={classes.description}>
          Diaspora Business Connection is the corporation that target to supports cross border business and act as bridge between enterpreneurs, partners and Business person. The primary motto of this web application is to meet different people across the global as per their interest and objectives. It also allow to explore the experienced specialist at different sectors around the globe.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <InfoArea
              title="Easy Sign Up"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={FileCopyOutlined}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <InfoArea
              title="Search Partner"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={SearchOutlined}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <InfoArea
              title="Get Meeting"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={MeetingRoom}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <InfoArea
              title="Thrive Business"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Business}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
