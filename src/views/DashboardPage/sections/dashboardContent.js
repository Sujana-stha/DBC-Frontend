import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Notificatons from "@material-ui/icons/Notifications";
import Connections from "@material-ui/icons/GroupAddOutlined";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card";

//components
import Calendar from "./meetingSections";
import Home from "./homeSections";
import ConnectionTab from './connectionSection';
import NotificationTab from './notificationSections'

import styles from "assets/jss/material-kit-react/views/dashboardPage";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">

            <GridContainer>

              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="warning"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 2, md: 2 },
                    contentGrid: { xs: 12, sm: 10, md: 10 },
                  }}
                  tabs={[
                    {
                      tabButton: "Dashboard",
                      tabIcon: Dashboard,
                      tabContent: (
                        <Home />
                      ),
                    },
                    {
                      tabButton: "Schedule",
                      tabIcon: Schedule,
                      tabContent: <Calendar />
                    },
                    {
                      tabButton: "Connections",
                      tabIcon: Connections,
                      tabContent: <ConnectionTab />
                    },
                    {
                      tabButton: "Notifications",
                      tabIcon: Notificatons,
                      tabContent: <NotificationTab />
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </Card>
  );
}
