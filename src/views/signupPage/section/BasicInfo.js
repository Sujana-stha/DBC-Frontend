import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from 'formik';
import * as yup from 'yup';
// import axios from "axios";
import {addUser} from "auth/apiRoutes"
import { useHistory } from "react-router-dom";
// core components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';


import styles from "assets/jss/material-kit-react/views/signupFormStyle";


const useStyles = makeStyles(styles);

export default function BasicInfo() {
  const classes = useStyles();
  let history = useHistory();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    
      username: yup
      .string('Enter your username')
      .required('username is required')
      .min(8, 'username should be of minimum 8 characters length'),
      first_name: yup
      .string('Enter your First Name')
      .required('First Name is required'),
    last_name: yup
      .string('Enter your First Name')
      .required('First Name is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      first_name: '',
      username: '',
      last_name: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      addUser(values).then((response) => {
        console.log(response)
        if(response.data) {
        history.push("/login-page");

        }
    });
    },
  });

  return (

    <Card className={classes.cardContainer}>
      <CardHeader color="warning">Create Account</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Fill out the below form!</h4>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          label="First Name"
          id="first_name"
          variant="outlined"
          name="first_name"
          className={classes.inputStyle}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
          label="Last Name"
          id="last_name"
          variant="outlined"
          name="last_name"
          className={classes.inputStyle}
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
        />
        <TextField
          label="Username"
          id="username"
          variant="outlined"
          name="username"
          className={classes.inputStyle}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

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
        />
        <TextField
          label="Password"
          id="password"
          variant="outlined"
          name="password"
          type="password"
          className={classes.inputStyle}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" color="warning" className={classes.submitBtn}>Submit</Button>
        </form>
      </CardBody>
    </Card>
  );
}

