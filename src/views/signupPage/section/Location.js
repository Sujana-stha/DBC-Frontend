import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
// core components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/signupFormStyle"

// Inputs


const useStyles = makeStyles(styles);

const Locations =({handleNext, handleChange,objectivesList,interestList, values: { countries, objective, interest }})=> {
  const classes = useStyles();
  console.log(objectivesList)
  function handleRender(selected) {
    const selectedValues = []
    selected.map(value=> {
      objectivesList.map(obj => {
        if(value === obj.id) {
          selectedValues.push(obj)
        }
      })
    })

    return (
      <div className={classes.chips}>
          {
            selectedValues.map((val, index) => {
              return(
                <Chip key={index} label={val.title} className={classes.chip} />
              )
          })
        }
      </div>
    ) 
    
     
  }
  function handleInterest(selected) {
    const selectedValues = []
    selected.map(value=> {
      interestList.map(inter => {
        if(value === inter.id) {
          selectedValues.push(inter)
        }
      })
    })
    console.log('se',selectedValues)
    return (
      <div className={classes.chips}>
          {
            selectedValues.map((val, index) => {
              return(
                <Chip key={index} label={val.title} className={classes.chip} />
              )
          })
        }
      </div>
    ) 
    
     
  }
  return (
    
    <Card className={classes.cardContainer}>
      <CardHeader color="warning">Basic Info</CardHeader>
      <CardBody>
          <h4 className={classes.cardTitle}>Tell us about yourself!</h4>
            <FormControl fullWidth required margin="normal">
              <InputLabel>Countries</InputLabel>
              <Select value={countries} onChange={handleChange} name="countries">
              {countriesList.map(country => {
                  return (
                    <MenuItem value={country.label}>{country.label}</MenuItem>
                  )
                  })}
                
              </Select>
            </FormControl>
            <FormControl  fullWidth required margin="normal">
              <InputLabel>Objectives</InputLabel>
              <Select 
              multiple
              value={objective} 
              onChange={handleChange} 
              input={<Input id="select-multiple-chip" />}
              renderValue = {handleRender}
              name="objective">
                {objectivesList.map((obj, index) => {
                  return (
                    <MenuItem key={index} value={obj.id}>
                      <Checkbox checked={objective.indexOf(obj.id) > -1} />
                      <ListItemText primary={obj.title} />
                    </MenuItem>
                  )
                  })}
                
              </Select>
            </FormControl>
            <FormControl fullWidth required margin="normal">
              <InputLabel>Interest</InputLabel>
              <Select 
              multiple
              value={interest} 
              onChange={handleChange} 
              input={<Input id="multiple-chip" />}
              renderValue = {handleInterest}
              name="interest">
             
             {interestList.map((inter, index) => {
                  return (
                    <MenuItem key={index} value={inter.id}>
                      <Checkbox checked={interest.indexOf(inter.id) > -1} />
                      <ListItemText primary={inter.title} />
                    </MenuItem>
                  )
                  })}
              </Select>
            </FormControl>
        <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={ handleNext }
        >
          Next
        </Button>
      </div>
      </CardBody>
    </Card>
  );
}

const countriesList = [
    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    { code: 'AU', label: 'Australia', phone: '61'},
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'CA', label: 'Canada', phone: '1', },
    { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },
    { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
    { code: 'CF', label: 'Central African Republic', phone: '236' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    { code: 'DE', label: 'Germany', phone: '49',},
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

// const objectivesList = [
//   {id: "1", title: "Grow your team"},
//   { id: "2", title: "Initiate business"},
//   { id: "3",title: "Explore new person"},
//   { id: "4",title: "Meet interesting people"},
//   { id: "5",title: "Brainstorm your ideas"},
//   { id: "6",title: "Invest"},
//   { id: "7",title: "Find an investors"},
//   { id: "8",title: "Provide mentors"},
//   { id: "9",title: "Explore new ideas"},
//   // {title: "Raise funding"},
//   // {title: "Explore established companies"},
//   // {title: "Business development"},
//   // {title: "Find enterpreneurs"},
//   // {title: "Organize events"},
//   // {title: "Explore trending projects"},
//   // {title: "Find a cofounder" },
// ]

// const interestList = [
//   {id: "1", title: "Food"},
//   { id: "2", title: "Music"},
//   { id: "3",title: "Science"},
//   { id: "4",title: "Podcast"},
//   { id: "5",title: "Technology"},
//   { id: "6",title: "Agriculture"},
//   { id: "7",title: "Writing"},
// ]
export default Locations