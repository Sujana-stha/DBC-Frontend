import PillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import { container, cardTitle, cardSubtitle } from "assets/jss/material-kit-react.js";


const dashboarsStyle =  {
    PillsStyle,
    container,
    cardSubtitle,
    cardTitle,
    cardContainer: {
        width: '70%',
        margin: '0 auto'
    },
    textCenter: {
        textAlign: "center",
    },
    button: {
        width: "40%",
        marginLeft: "15px"
    },
    card: {
        margin: "2rem 0 2.5rem"
    },
    inputStyle: {
        width: "100%",
        margin: "1rem 0",
    },
    noResponse: {
        display: "none",
        '&:firstChild': {
            display: "block"
        }
    },
    
}

export default dashboarsStyle;