import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import Notifications, { notify } from 'react-notify-toast';
import { login } from "auth/apiRoutes"
import { allUsers } from "auth/apiRoutes"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';
import Email from "@material-ui/icons/EmailOutlined";
import Lock from "@material-ui/icons/LockOutlined";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import Logo from "../../assets/img/changedLogo.png"

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [allUsersList, setAllUsersList] = React.useState([]);
  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  let history = useHistory();

  // const { setAuthState } = useContext(AuthContext);
  useEffect(() => {
    allUsers().then((response) => {
      console.log("matched", response.data);
      if (response.data) {
        setAllUsersList(response.data)
      }

    })
  }, [])
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),

  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values).then((response) => {

        var now = new Date().getTime();
        if (response.data) {
          localStorage.setItem("access_token", response.data.accesstoken)
          localStorage.setItem('setupTime', now)
          notify.show("Login Successfull!", "success", 5000);
          // setAuthState(true); 
          var validUser = {}
          allUsersList.map(user => {
            if (values.email == user.email) {
              validUser = user
            }
          })
          console.log(validUser);
          if (validUser.PersonalInfo && validUser.Interest.length) {
            history.push("/dashboard");
          } else {
            history.push("/dashboard/create-profile")
          }
        } else if (response.errors) {
          notify.show("Incorrect email or password", "error", 5000);
        }

      });
    }
  });
  const { ...rest } = props;
  return (
    <div>
      <Notifications options={{ top: '100px', right: '0px', width: '100%', margin: 0, left: 'none' }} />
      <Header
        absolute
        color="transparent"
        brand={<img src={Logo} className={classes.navLogo} />}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>

                  </CardHeader>
                  <p className={classes.divider}>Fill out the form!</p>
                  <CardBody>

                    <TextField
                      label="Email"
                      id="email"
                      variant="outlined"
                      name="email"
                      className={classes.inputStyle}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />

                        </InputAdornment>,
                      }}
                    />
                    <TextField
                      label="Password"
                      id="password"
                      variant="outlined"
                      type="password"
                      className={classes.inputStyle}

                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <Lock className={classes.inputIconsColor} />
                        </InputAdornment>,
                      }}
                      autoComplete="off"
                      name="password"

                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {/* <Link to="/user-dashboard"> */}
                    <Button type="submit" simple color="primary" size="lg">
                      Log In
                    </Button>
                    {/* </Link> */}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
