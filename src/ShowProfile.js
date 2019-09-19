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
        borderRadius: "22px",
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
    },
    fab: {
        margin: theme.spacing(1),
        backgroundColor: "#b3150c",
        color: "white"
    },
    photo: {
        width: "100%"
    }
}));

export default function ShowPhoto() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.containerStyle}>
                <Grid item xs={12}>
                    <h1 className={classes.name}> Amimitl, Tepoztlán</h1>
                </Grid>
                <Grid item xs={12}>
                    <img className={classes.photo} src={'https://www.sintesis.mx/wp-content/uploads/2017/09/Indigena-1068x715.jpg'} alt="Photo didn't load :("></img>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.bio}> Soy una chica sencilla, me gusta pasear y comer </h4>
                </Grid>
                <Grid item xs={12}>
                    Unmatch
            <Fab aria-label="add" className={classes.fab}>
                        <i class="material-icons">cancel</i>
                    </Fab>
                </Grid>
            </Grid>
        </div>
    );
}