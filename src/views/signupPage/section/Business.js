import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/signupFormStyle";


const useStyles = makeStyles(styles);

export default function Cards({ handleNext, handleBack, handleChange, values: { business_sector, business_name, position } }) {
  const classes = useStyles();

  const defaultProps = {
    options: countries,
    getOptionLabel: (option) => option.label,
  };


  return (

    <Card className={classes.cardContainer}>
      <CardHeader color="warning">Business Info</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Tell us about Your Business!</h4>

        {/* <Autocomplete
            {...defaultProps}
            id="countries"
            countries
            className={classes.selectStyle}
            renderInput={(params) => <TextField {...params} label="Business Sector" variant="outlined" />}
            
            /> */}
        <FormControl fullWidth required margin="normal">
          <InputLabel>Business Sector</InputLabel>
          <Select value={business_sector} onChange={handleChange} name="business_sector">

            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Business Name"
          id="business_name"
          variant="outlined"
          name="business_name"
          className={classes.inputStyle}
          value={business_name || ""}
          margin="normal"
          onChange={handleChange}
          required
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel>Your Position</InputLabel>
          <Select variant="outlined" value={position} onChange={handleChange} name="position">

            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="developer">Developer</MenuItem>
            <MenuItem value="Technician">Technician</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>
        {/* <Autocomplete
          {...defaultProps}
          id="countries"
          countries
          name="position"
          value={position || ""}
          margin="normal"
          onChange={handleChange}
          required
          className={classes.selectStyle}
          renderInput={(params) => <TextField {...params} label="Your Position" variant="outlined" />}
        /> */}

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

const countries = [
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  { code: 'AU', label: 'Australia', phone: '61' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'CA', label: 'Canada', phone: '1', },
  { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },
  { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
  { code: 'CF', label: 'Central African Republic', phone: '236' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  { code: 'DE', label: 'Germany', phone: '49', },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FR', label: 'France', phone: '33' },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
]
