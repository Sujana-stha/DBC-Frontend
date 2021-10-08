import React from "react";
import classNames from "classnames";
import {createProfile} from "auth/apiRoutes"
import { useHistory } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const useStyles = makeStyles(styles);

export default function FinalSubmit( {
  handleBack,
  values: { countries, objective, interest, business_name, business_sector, position, file, summary }}){
  const [checked, setChecked] = React.useState([24, 22]);
  const classes = useStyles();
  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );
  let history = useHistory();
  const handleSubmit = () => {
    console.log({ countries, objective, interest, business_name, business_sector, position, file, summary });
    const values = {
      countries: countries,
      objective: objective,
      interest: interest,
      business_name: business_name,
      business_sector: business_sector,
      position: position,
      file: file,
      summary: summary
    }
    // const formData = new FormData()
  
    createProfile( values).then(response=> {
      console.log('resp',response)
      if (response.data) {
        history.push("/dashboard")
      }
    })
    // handleNext();
  };
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Card style={{width: "30rem", margin: "5rem auto 1.5rem"}}>
    <CardHeader color="warning">Submit</CardHeader>
    <CardBody>
        <div className={wrapperDiv}>
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{ checked: classes.checked }}
            />
          }
          classes={{ label: classes.label }}
          label="Click on this Checkbox to submit the form. By clicking on the checkbox you will agree on our privacy and policy."
        />
      </div>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </div>
    </CardBody>
    </Card>
    );
}
