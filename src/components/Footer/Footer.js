/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.twitter.com"
                className={classes.block}
                target="_blank"
              >
                <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-twitter"
                      }
                    />{" "}
                    Twitter
              </a>
              
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com"
                className={classes.block}
                target="_blank"
              >
               <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-facebook"
                      }
                    />{" "}
                    Facebook
              </a>
              
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.instagram.com"
                className={classes.block}
                target="_blank"
              >
                <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-instagram"
                      }
                    />{" "}
                    Instagram
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.google.com"
                className={classes.block}
                target="_blank"
              >
                <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-google"
                      }
                    />{" "}
                    Google
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , 
          <a
            href="https://www.bridgeindia.org.uk/"
            className={aClasses}
            target="_blank"
          >
            Bridge India
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
