import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowPhoto from './ShowPhoto'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#aa3a2a",
    fontFamily: "'Poppins', sans-serif"
  },
}));

export default function Home() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
        <ShowPhoto/>
    </div>
  );
}