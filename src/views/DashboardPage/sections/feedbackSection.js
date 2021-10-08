
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {postFeedbacks} from 'auth/apiRoutes' 
// material-ui components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Rating from '@material-ui/lab/Rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// @material-ui/icons\
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";

import modalStyle from "assets/jss/material-kit-react/modalStyle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff8307',
  },
  iconHover: {
    color: '#ff8307',
  },
  label: {
    fontSize: '38px'
  }
})(Rating);
const useStyles = makeStyles(modalStyle);
// const useModalStyles = makeStyles(modalStyle)

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function FeedbackForm() {
  const [modal, setModal] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  // const modalClasses = useModalStyles();
  const validationSchema = yup.object({
    rating: yup
      .number('Give some rating')
      .required('Rating is required'),
    comments: yup
      .string('Enter some comments')
      .required('Password is required'),
   
  });
  const formik = useFormik({
    initialValues: {
      rating: value,
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postFeedbacks(values).then((response) => {
        setModal(false)
        formik.resetForm({});
      });
    },
  });
  return (
    <div>
      <Button color="warning" round onClick={() => setModal(true)}>
        Send us feedbacks
        </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Feedback form</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <h5>Give us your valuable suggestion for the applications</h5>
          <form onSubmit={formik.handleSubmit}>
            
            <h6>Give us some stars!</h6>
            <div className={classes.root}>
              <StyledRating
                name="rating"
                precision={0.5}
                size="large" 
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                value={formik.values.rating}
                onChange={formik.handleChange}
                error={formik.touched.rating && Boolean(formik.errors.rating)}
                helperText={formik.touched.rating && formik.errors.rating}
              />
              {value !== null && <p ml={2}>Rating value: {labels[hover !== -1 ? hover : value]}</p>}
            </div>
            
            <div className={classes.summary}>
              <label >Comments</label>
              <TextareaAutosize 
              style={{ width: '100%', marginTop: '10px' }} 
              aria-label="minimum height" rowsMin={6} 
              placeholder="Your suggestions..."
              name="comments"
              value={formik.values.comments}
              onChange={formik.handleChange}
              error={formik.touched.comments && Boolean(formik.errors.comments)}
              helperText={formik.touched.comments && formik.errors.comments} 
              />

            </div>
            <Button onClick={() => setModal(false)}>Delete</Button>
            <Button type="submit" color="success">
              Submit
            </Button>

          </form>
        </DialogContent>
        {/* <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button onClick={() => setModal(false)}>Delete</Button>
          <Button onClick={() => setModal(false)} color="success">
            Send
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}