import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import clsx from 'clsx';

// core components
import FeedbackSection from "../sections/feedbackSection"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
import NavPills from "components/NavPills/NavPills.js";

import Like from "@material-ui/icons/ThumbUpAltOutlined";
import Dislike from "@material-ui/icons/ThumbDownAltOutlined"

import styles from "assets/jss/material-kit-react/views/dashboardPage";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <NavPills
                plainTabs
                headerColor="warning"
                tabs={[
                  {
                    tabButton: "Daily Picks",
                    tabContent: (
                      <div>
                        <Card className={classes.card}>
                          <CardBody>
                            <h4 className={classes.cardTitle}>Would you like to meet someone like John</h4>
                            <h6 className={classes.cardSubtitle}>John Mayer</h6>
                            <p>
                                John Mayer is a software engineer wokring in microsoft office for 3yrs. He is a quick learner and want to build the professionalism and share ideas with other peoples.
                            </p>
                            <Button className={classes.button} variant="outlined" color="warning" startIcon={<Like/>}> yes</Button>
                            <Button className={classes.button} variant="outlined" color="warning" startIcon={<Dislike/>}> no</Button>
                          </CardBody>
                      </Card>
                      <Card className={classes.card}>
                          <CardBody>
                          <h4 className={classes.cardTitle}>Would you like to meet someone like John</h4>
                            <h6 className={classes.cardSubtitle}>John Mayer</h6>
                            <p>
                                John Mayer is a software engineer wokring in microsoft office for 3yrs. He is a quick learner and want to build the professionalism and share ideas with other peoples.
                            </p>
                            <Button className={classes.button} variant="outlined" color="warning" startIcon={<Like/>}> yes</Button>
                            <Button className={classes.button} variant="outlined" color="warning" startIcon={<Dislike/>}> no</Button>
                          </CardBody>
                      </Card>
                      <Card className={classes.card}>
                          <CardBody>
                            <h4 className={classes.cardTitle}>Would you like to meet someone like John</h4>
                            <h6 className={classes.cardSubtitle}>John Mayer</h6>
                            <p>
                                John Mayer is a software engineer wokring in microsoft office for 3yrs. He is a quick learner and want to build the professionalism and share ideas with other peoples.
                            </p>
                            <Button className={classes.button} variant="outlined" color="warning" startIcon={<Like/>}> yes</Button>
                            <Button className={classes.button} variant="outlined" color="warning" startIcon={<Dislike/>}> no</Button>
                          </CardBody>
                      </Card>
                      </div>
                      
                    ),
                  },
                  {
                    tabButton: "Feedbacks",
                    tabContent: (
                      <div>
                        <Card className={classes.card}>
                          <CardBody>
                            <h4 className={clsx(classes.cardTitle, classes.textCenter)}>Tell us what you think about this applications</h4>
                            <p className={classes.textCenter}>Have any suggestion and feedbacks on how we can improve our sites or any insights you would like to see?</p>
                            <div className={classes.textCenter}>
                            <FeedbackSection />
                            </div>
                            
                          </CardBody>
                        </Card>
                      </div>
                    ),
                  },
                  
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
