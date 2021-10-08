import { cardTitle } from "assets/jss/material-kit-react.js";

const signupFormStyle = {
    cardTitle,

    cardContainer: {
        width: "30rem",
        margin: "5rem auto 1.5rem"
    },

    selectStyle: {
        margin: "2rem 0",
    },
    inputStyle: {
        width: "100%",
        margin: "1rem 0",
    },
    uploadLabel: {
        padding:"20px 0"
    },
    input: {
        margin: '0.6rem 0 1.5rem'
  
    },
    summary: {
      margin: '1.5rem 0'
    },
    sectorContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '30px auto'
    },
    sectorLists: {
      padding: '1.5rem  0.5rem'
    },
    sectorName: {
        textAlign: 'center',
      fontWeight: 'bold',
      color: '#E7DB47',
      paddingTop: '10px'
    },
    submitBtn: {
        width: "100%"
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        // marginTop: theme.spacing(3),
      },
}

export default signupFormStyle;