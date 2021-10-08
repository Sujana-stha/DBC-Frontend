import React, { useState, Fragment, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {getObjectives, getInterests} from 'auth/apiRoutes';

//material core components
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FinalIcon from '@material-ui/icons/AssignmentTurnedIn';
import PersonalIcon from '@material-ui/icons/PersonAdd';
import SectorIcon from '@material-ui/icons/SelectAll';
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import StepConnector from '@material-ui/core/StepConnector';
import styles from "assets/jss/material-kit-react/views/landingPage.js";

//content
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// Forms Parts
import Location from "./section/Location"
import Business from './section/Business'
import PersonalInfo from './section/PersonalDetails'
import Submit from './section/FinalSubmit'

//images
import Logo from "../../assets/img/changedLogo.png"

const dashboardRoutes = [];

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SectorIcon />,
    2: <BusinessIcon />,
    3: <PersonalIcon />,
    4: <FinalIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10%',
    marginBottom: '5%'
  },
  groupButton: {
    margin: '0 auto',
    width: '28rem',

  },
  button: {
    marginRight: theme.spacing(5),

  },
  Rightbutton: {
    marginRight: theme.spacing(1),
    float: 'right'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  Customwizard: {
    width: '70%',
    background: 'transparent',
    margin: '0 auto'
  }
}));

const headerStyles = makeStyles(styles);

function getSteps() {
  return ['Basic Info', 'Business', 'Personal Details', 'Submit'];
}

export default function SignUpForm(props) {
  const { ...rest } = props;
  const initialValues = {
    location: '', 
    objective: [],
    interest: [],
    summary: '', 
    file: [], 
    business_name: '', 
    business_sector: '', 
    position: '',
  };
  const classes = useStyles();
  const HeaderClasses = headerStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [objectiveList, setObjectiveList] = useState([]);
  const [interestList, setInterestList] = useState([])

  const steps = getSteps();
  
  useEffect(()=> {
		getObjectives().then(response => {
			console.log(response);
			setObjectiveList(response.data);
		});
    getInterests().then(response => {
			console.log(response);
			setInterestList(response.data);
		})
	}, [])
// Proceed to next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

// Go back to prev step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


const handleChange = (e) => {
  const { name, value } = e.target;
  console.log('valllll',e)
  // Set values
  setFormValues((prev) => ({
    ...prev,
    [name]: value
  }));
 
//   console.log('form',formValues)
//   // set errors
//   // const error = formValidation(name, value, fieldsValidation) || "";

//   // setFormErrors({
//   //   [name]: error
//   // });
};
  function getStepContent(step) {
    const isLastStep = (activeStep === steps.length - 1);
    switch (step) {
      case 0:
        return <Location handleNext={handleNext}
        handleChange={handleChange}
        values={formValues}
        objectivesList = {objectiveList}
        interestList = {interestList}
        formErrors={formErrors}/>;
      
      case 1:
        return <Business handleNext={handleNext}
        handleBack={handleBack}
        handleChange={handleChange}
        values={formValues}
        formErrors={formErrors}/>;
      case 2:
        return <PersonalInfo handleNext={handleNext}
        handleBack={handleBack}
        handleChange={handleChange}
        values={formValues}
        formErrors={formErrors}/>;
      case 3:
        return <Submit  handleNext={handleNext}
        handleBack={handleBack}
        values={formValues}/>;
      default:
        return 'Unknown step';
    }
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand={<img src={Logo} className={HeaderClasses.navLogo} />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {activeStep === steps.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
      <div className={classes.root}>

        <Stepper className={classes.Customwizard} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <p>You're done!</p>
          ) : (
            <Fragment> {getStepContent(activeStep)} </Fragment>
          )}
        </Fragment>
        
      </div>
      )}
    </div>
  );
}
