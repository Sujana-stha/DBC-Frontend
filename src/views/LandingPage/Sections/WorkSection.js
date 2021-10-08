import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

// images
import formImage from "assets/img/1.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center" className="buttomContainer">
        <GridItem cs={12} sm={12} md={4}>
          <img
            src={formImage}
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: "0",
            }}
          ></img>
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Build your Excitement</h2>
          <h4 className={classes.description}>
            Create your first account and explore the applications.Build your
            excitement in the business. Click on the button below to get started
            with your new account
          </h4>
          <div className={classes.createButton} >
          <Button color="primary">Create Account</Button>
          </div>
          {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
