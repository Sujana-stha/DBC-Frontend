import React, { useEffect, useState } from "react";
// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import image from "assets/img/faces/avatar.jpg";
import Button from "components/CustomButtons/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "../Alerts";

import Like from "@material-ui/icons/ThumbUpAltOutlined";
import Dislike from "@material-ui/icons/ThumbDownAltOutlined"

import styles from "assets/jss/material-kit-react/views/dashboardPage";
import Typographystyles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
//api
import { loggedUser, allMeetUsers, updateMeetStatus } from 'auth/apiRoutes'

const useStyles = makeStyles(styles);
const typographyStyles = makeStyles(Typographystyles)

export default function Notifications() {
    const classes = useStyles();
    const typoClasses = typographyStyles();
    const [authUsers, setAuthUser] = useState({});
    const [meetUsers, setMeetUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("info");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        loggedUser().then((response) => {
            console.log("auth", response.data);
            if (response.data) {
                setAuthUser(response.data)
            }
        });

        allMeetUsers().then((response) => {
            console.log("meet", response.data);
            if (response.data) {
                setMeetUsers(response.data)
            }
        })

    }, [])
    const updateStatus = (id) => {
        
        const values = {
            "status": "accepted"
        }
        updateMeetStatus(id, values).then((response)=> {
            console.log(response.data.message)
            try{
                if(response.data.message) {
                    setStatus("Accepted");
                    setMessage("Accepted Successfully");
                    setOpen(true);
                    setSeverity("success");
                }
            } catch(error) {
                setMessage("Something went wrong. Try again");
                setOpen(true);
                setSeverity("error");
            }
            
        })
    }
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
    };
    return (
        <div className={classes.container}>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
        </Snackbar>
            <div id="nav-tabs">
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <NavPills
                            plainTabs
                            headerColor="warning"
                            tabs={[
                                {
                                    tabButton: "Requests",
                                    tabContent: (
                                        <div>
                                            {meetUsers.map((meet, index) => {
                                                if ((meet.MeetUserId == authUsers.id) && (meet.status == "pending")) {
                                                        
                                                    return (
                                                        <SnackbarContent key={index}
                                                            message={
                                                                <GridContainer>
                                                                    <GridItem xs={12} sm={2} className={typoClasses.marginLeft}>
                                                                        <img
                                                                            src={image}
                                                                            alt="..."
                                                                            className={typoClasses.imgRoundedCircle + " " + typoClasses.imgFluid}
                                                                        />
                                                                    </GridItem>
                                                                    <GridItem xs={12} sm={10}>
                                                                        <h5>{meet.authUsername.replace(/ /g, "_")}</h5>
                                                                        <p>{`${meet.authUsername.replace(/ /g, "_")} send you a request to meet you.`}</p>
                                                                        {status == "Accepted" ? (
                                                                            <Button style={{ marginRight: "1.5rem" }} variant="outlined" color="success">Accepted</Button>
                                                                        ):<>
                                                                        <Button onClick={() => {
                                                                            updateStatus(meet.id)
                                                                        }} style={{ marginRight: "1.5rem" }} variant="outlined" color="success" startIcon={<Like />}> Accept</Button>
                                                                        <Button variant="outlined" color="danger" startIcon={<Dislike />}> Reject</Button>
                                                                        </>}
                                                                    </GridItem>
                                                                </GridContainer>
                                                            }
                                                            close
                                                            
                                                        />
                                                    )
                                                } else {
                                                    return (
                                                        <p className={classes.noResponse}>You do not have any requests at the moment.</p>
                                                    )
                                                }
                                            })}
                                            {/* <p>You do not have any requests at the moment.</p> */}
                                        </div>

                                    )
                                },
                            ]} />

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}