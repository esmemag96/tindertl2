import React from 'react';
import logo from './images/tindertlFull.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { fontWeight } from '@material-ui/system';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneMatch from './OneMatch'
import Message from './Message'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
    },
    containerStyle: {
        color: "black",
        width: "70%",
        height: "100%",
        display: "inline-flex",
        backgroundColor: "white",
        border: "8px solid black",
        borderRadius: "22px"
    },
}));

export default function Matches() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.containerStyle}>
                <Grid item xs={12}>
                    <h1>Matches</h1>
                    <Link to="/message/001">
                        <OneMatch photo="https://www.gob.mx/cms/uploads/image/file/317714/MUJERES_IND_GENAS__5_.jpg" name="Amimitl" id="001" />
                    </Link>
                    <OneMatch photo="https://www.gob.mx/cms/uploads/image/file/317714/MUJERES_IND_GENAS__5_.jpg" name="Xochitl" id="002" />
                    <OneMatch photo="https://i0.wp.com/mujeresconfiar.com/wp-content/uploads/2018/09/Hilda-Domico-Bailarin-1.jpg?fit=1024%2C702&ssl=1" name="Yanetzy" id="003" />
                </Grid>
            </Grid>
        </div>
    );
}
