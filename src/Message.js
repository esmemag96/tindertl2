import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { fontWeight, width } from '@material-ui/system';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneMatch from './OneMatch'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: "black",
        width: "50%",
        height: "100%",
        display: "inline-flex",
        backgroundColor: "white",
        border: "8px solid black",
        borderRadius: "22px",
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
    },
    iconsStyle: {
        marginTop: "20%",
        fontSize: "30px",
    },
    containerStyle: {
        backgroundColor: "#aa3a2a",
        color: "white",
        marginBottom: "10px",
        width: "100%"
    },
    photo: {
        borderRadius: "50%",
        border: "3px solid black",
        margin: 10,
        width: 60,
        height: 60,
    },
    toMeChatBubble: {
        backgroundColor: "#e8e3e3",
        borderRadius: "15px",
        marginBottom: "10px",
        width: "20%"
    },
    fromMeChatBubble: {
        backgroundColor: "#d68245",
        borderRadius: "15px",
        color: "white",
        marginBottom: "10px",
        width: "20%"
    },
    chatBox: {
        marginTop: "10em",
        marginBottom: "1em"
    },
    textInputStyle: {  
        width:"30em"
    }
}));

export default function Message(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={3} className={classes.containerStyle}>
                    <Avatar className={classes.photo} src={"https://www.sintesis.mx/wp-content/uploads/2017/09/Indigena-1068x715.jpg"} alt="Photo didn't load :(" />
                </Grid>
                <Grid item xs={9} className={classes.containerStyle}>
                    <Link to="/showprofile" >
                        <h1>Amimitl</h1>
                    </Link>
                </Grid>
                <Grid item xs={12} spacing={10} justify="flex-start" >
                    <h1 className={classes.toMeChatBubble}>hola</h1>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="flex-end" item xs={12} spacing={10} >
                    <h1 className={classes.fromMeChatBubble}>hola</h1>
                </Grid>
                <Grid item xs={12} className={classes.chatBox} >
                    <TextField
                        id="outlined-adornment-password"
                        className={classes.textInputStyle}
                        variant="outlined"
                        type=""
                        label="Send message"
                        value=""
                        onChange=""
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Icon
                                        edge="end"
                                        aria-label="toggle password visibility"
                                        onClick=""
                                        onMouseDown=""
                                    >
                                    send
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
