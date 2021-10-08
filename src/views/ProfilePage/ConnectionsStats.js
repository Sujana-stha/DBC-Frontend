import React from "react";
import {NavLink} from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import clsx from 'clsx';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
import NavPills from "components/NavPills/NavPills.js";


import styles from "assets/jss/material-kit-react/views/dashboardPage";

const useStyles = makeStyles(styles);

export default function SectionTabs({meetUsers}) {
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
                    tabButton: "Connected",
                    tabContent: (
                      <div>
                          {meetUsers.map((meet, index)=> {
                              if(meet.status == "accepted") {
                                  return (
                                    <Card key={index} className={classes.card}>
                                        <CardBody>
                                            <h6 className={classes.cardSubtitle}>{meet.MeetUsername.replace(/_/g, ' ')}</h6>
                                            <p></p>
                                            <Button className={classes.button} variant="outlined" color="primary"><NavLink to={`/dashboard/view-profile/${meet.MeetUserId}`}> View Profile</NavLink></Button>
                                        </CardBody>
                                    </Card>
                                  )
                              }
                              
                          })}
                      </div>
                      
                    ),
                  },
                  {
                    tabButton: "Pending Request",
                    tabContent: (
                      <div>
                          {meetUsers.map((meet, index)=> {
                              if(meet.status == "pending") {
                                  return (
                                    <Card key ={index} className={classes.card}>
                                        <CardBody>
                                        <h6 className={classes.cardSubtitle}>{meet.MeetUsername.replace(/_/g, ' ')}</h6>
                                            <p></p>
                                            <Button className={classes.button} variant="outlined" color="secondary"> Reject</Button>
                                        </CardBody>
                                    </Card>
                                )
                              }
                              
                          })}
                        
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
