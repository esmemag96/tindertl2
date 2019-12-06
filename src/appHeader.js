import React from 'react';
import logo from './images/tindertlFull.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { fontWeight } from '@material-ui/system';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MyProfile from './MyProfile'

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logoStyle: {
    width: "8em"
  },
  iconsStyle: {
    fontSize: "30px",
    fontWeight: '600',
    cursor: "pointer",
    color: "black !important"
  }
}));

export default function AppHeader() {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Link to="/myprofile">
            <Icon className={classes.iconsStyle}>
              person
            </Icon>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/">
            <img className={classes.logoStyle} id="logoFull" src={logo} alt="Logo didn't load :("></img>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/matches">
            <Icon className={classes.iconsStyle}>
              message
              </Icon>
          </Link>
        </Grid>
      </Grid>
      <Route path="/myprofile" component={MyProfile} />
    </div>
  );
}


/*
Referencias
https://stackoverflow.com/questions/1484506/random-color-generator
*/
