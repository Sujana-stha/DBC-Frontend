/*eslint-disable*/
import React from "react";
import {NavLink} from 'react-router-dom';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} style={{right:"240px"}}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        /> */}
        <div>
                <CustomInput
                  dark
                  style = {{
                    width: "300px"
                  }}
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl,
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput,
                    },
                  }}
                  
                />
                
                <Button justIcon round color="primary">
                  <Search className={classes.searchIcon} />
                </Button>
                
              </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/login-page" >
          <Button color="primary" round>
                Sign In
              </Button>
              </NavLink>
      </ListItem>
      
    </List>
  );
}
