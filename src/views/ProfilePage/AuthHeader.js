import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import { loggedUser } from 'auth/apiRoutes';
import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Search from "@material-ui/icons/Search";


// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Buttons from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';
import CustomInput from "components/CustomInput/CustomInput";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

//images
import Logo from "../../assets/img/changedLogo.png"
import { set } from "immutable";

// const dashboardRoutes = [];

const useStyles = makeStyles(styles);
export default function LandingPage() {
    const classes = useStyles();
    // const { ...rest } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [authUser, setAuthUser] = useState({});

    let history = useHistory();

    useEffect(()=> {
        loggedUser().then((response)=> {
            setAuthUser(response.data);
        })
    }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('setupTime');
    history.push("/");
  }
    return (
        <Header
            brand={<img src={Logo} className={classes.navLogo} />}
            color="white"
            rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem} style={{ right: "240px" }}>
                        <CustomInput
                            dark
                            style={{
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

                        <Buttons justIcon round color="primary">
                            <Search className={classes.searchIcon} />
                        </Buttons>

                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <NavLink to="/dashboard"><Button>
                            <i style = {{fontSize: "20px"}} className="fas fa-home"/>
                        </Button></NavLink>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <img
                                src={profileImage}
                                className={classes.img}
                                alt="profile"
                            />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <NavLink to ={`/dashboard/profile-page/${authUser.id}`}>Profile</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </ListItem>

                    {/* <ListItem className={classes.listItem}>
                        <CustomDropdown
                            right
                            caret={false}
                            hoverColor="black"
                            dropdownHeader="John Doe"
                            buttonText={
                                <img
                                    src={profileImage}
                                    className={classes.img}
                                    alt="profile"
                                />
                            }
                            buttonProps={{
                                className:
                                    classes.navLink + " " + classes.imageDropdownButton,
                                color: "transparent",
                            }}
                            dropdownList={[
                                "Profile",
                                "Settings",
                                "Sign out",

                            ]}
                        />
                    </ListItem> */}
                </List>
            }
        />

    );
}
