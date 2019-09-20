import React from 'react';
import logo from './images/tindertlFull.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Message from './Message'
import { fontWeight } from '@material-ui/system';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: "'Poppins', sans-serif"
    },
    iconsStyle: {
        marginTop: "15%",
        fontSize: "30px",
    },
    containerStyle: {
        backgroundColor: "#aa3a2a",
        color: "white",
        marginTop: "10px",
        marginBottom: "10px"
    },
    photo: {
        borderRadius: "50%",
        border: "3px solid black",
        margin: 10,
        width: 60,
        height: 60,
    }
}));

export default function OneMatch(props) {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.containerStyle}>
                <Grid item md={3} xs={3}>
                    <Avatar src={props.photo} className={classes.photo} />
                    {/* <img className={classes.photo} src={props.photo} alt="Photo didn't load :("></img> */}
                </Grid>
                <Grid item md={6} xs={9}>
                    <h1>{props.name}</h1>
                </Grid>
                <Hidden smDown>
                    <Grid item md={3}>
                        <Icon className={classes.iconsStyle}>
                            message
                        </Icon>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
}
