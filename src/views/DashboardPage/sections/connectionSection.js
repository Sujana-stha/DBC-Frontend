import React, { useEffect, useState } from "react";
import { matchedUsers, sendMeetRequest } from "auth/apiRoutes"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "../Alerts";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button";
import clsx from 'clsx';


// core components
import FeedbackSection from "../sections/feedbackSection"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
import NavPills from "components/NavPills/NavPills.js";

import Like from "@material-ui/icons/ThumbUpAltOutlined";
import Dislike from "@material-ui/icons/ThumbDownAltOutlined"

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/dashboardPage";
import Typographystyles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const typographyStyles = makeStyles(Typographystyles)

export default function SectionTabs() {
    const classes = useStyles();
    const typoClasses = typographyStyles();
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("info");
    const [message, setMessage] = useState("");

    const [matchedUsersList, setMatchedUserList] = useState([]);
    
    useEffect(() => {
        matchedUsers().then((response) => {
            console.log("matched", response.data);
            if (response.data) {
                setMatchedUserList(response.data)
            }   
            
        })
    }, [])

    const sendRequest = (id) => {
        console.log(matchedUsersList)
        var matchedInfo = {};
        matchedUsersList.map((user) => {
            if(user.id === id) {
                matchedInfo= user
            }
        })
        const values = {
            "MeetUserId": id,
            "MeetUsername": matchedInfo.username,
            "status": "pending"
        }
        console.log(values)
        sendMeetRequest(values).then((response)=> {
            console.log(response.data.message)
            try{
                if(response.data.message) {
                    setMessage("Request send successfully");
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
            <div className={classes.root}>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
        </Snackbar>
      
        </div>
            <div id="nav-tabs">
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <NavPills
                            plainTabs
                            headerColor="warning"
                            tabs={[
                                {
                                    tabButton: "Recommendations",
                                    tabContent: (
                                        <div>
                                            <h3>Recommend Matched users for you!</h3>
                                            <h5>Meet the people you want!</h5>
                                            {matchedUsersList.map((matchUser, index)=> {
                                                return (
                                                    <Card key={index} className={classes.card}>
                                                    <CardBody>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={2} className={typoClasses.marginLeft}>
                                                            <img
                                                                src={image}
                                                                alt="..."
                                                                className={typoClasses.imgRoundedCircle + " " + typoClasses.imgFluid}
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={12} sm={10}>
                                                            <h5>{matchUser.first_name} {matchUser.last_name}</h5>
                                                            <p>{matchUser.PersonalInfo.summary}</p>
                                                            <Button onClick={()=> {
                                                                sendRequest(matchUser.id)
                                                            }} style={{ marginRight: "1.5rem" }} variant="outlined" color="success" startIcon={<Like />}> Meet</Button>
                                                            <Button variant="outlined" color="danger" startIcon={<Dislike />}> Reject</Button>
                                                        </GridItem>
                                                    </GridContainer>
                                                </CardBody>
                                                </Card>
                                                )
                                            })}
                                            
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
