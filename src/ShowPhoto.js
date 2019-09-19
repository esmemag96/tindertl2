import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  containerStyle: {
    color: "black",
    width: "50%",
    display: "inline-flex",
    backgroundColor: "white",
    border: "8px solid black",
    borderRadius: "22px"
  },
  fab: {
    margin: theme.spacing(1),
    backgroundColor: "#587d2a",
    color:"white"
  },
  photo: {
      width:"100%"
  }
}));

export default function ShowPhoto() {
  const classes = useStyles();
  return(
    <div>
      <Grid container className={classes.containerStyle}>
        <Grid item xs={12}>
          <h1 className={classes.name}>Yalitza</h1>
        </Grid>
        <Grid item xs={12}>
          <img className={classes.photo} id="logoFull" src={'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFwp4s.img?h=375&w=624&m=6&q=60&o=f&l=f&x=573&y=237'} alt="Photo didn't load :("></img>
        </Grid>
        <Grid item xs={12}>
          <h4 className={classes.bio}> Actriz de cine y maestra mexicana, reconocida por mi participación en la cinta Roma, no busco nada serio, no mando nudes</h4>
        </Grid>
        <Grid item xs={6}>
            <Fab aria-label="add" className={classes.fab}>
                <i class="material-icons">thumb_down</i>
            </Fab>
        </Grid>
        <Grid item xs={6}>
            <Fab aria-label="add" className={classes.fab}>
                <i class="material-icons">thumb_up</i>
            </Fab>
        </Grid>
      </Grid>
    </div>
  );
}