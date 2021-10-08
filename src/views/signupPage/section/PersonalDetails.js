import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

// core components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/signupFormStyle";



const useStyles = makeStyles(styles);

export default function PersonalDetails({ handleNext, handleBack, handleChange, values: { file, summary } }) {
  const classes = useStyles();
  // console.log(handleChange);
  return (
    
    <Card className={classes.cardContainer}>
      <CardHeader color="warning">Basic Info</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Let us know about you more!</h4>
        <div>
        <label className={classes.uploadLabel}>Upload your profile picture</label>
        <input
        accept="image/*"
        className={classes.input}
        name="file"
        id="raised-button-file"
        multiple
        type="file"
        value={file || ""}
        onChange={handleChange}
        placeholder="Upload Profile Picture"
        />
        </div>
        {/* <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" className={classes.button}>
            Upload
        </Button>
        </label>  */}
        <div className={classes.summary}>
            <label >Your Brief Summary</label>
            <TextareaAutosize  name="summary"
            value={summary || ""}

          onChange={handleChange}
          required 
          style={{width: '100%',marginTop: '10px'}} aria-label="minimum height" rowsMin={6} placeholder="I am a..." />

        </div>
        {/* <Button color="primary">Do something</Button> */}
        <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
          <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
            Back
        </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
        </Button>
        </div>
      </CardBody>
    </Card>
  );
}

