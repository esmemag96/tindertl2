import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#aa3a2a",
        fontFamily: "'Poppins', sans-serif",
        color: "white"
    },
    containerStyle: {
        width: "50%",
        display: "inline-flex",
        backgroundColor: "aa3a2a",
    },
    photo: {
        margin: 10,
        width: 300,
        height: 300,
    },
    fab: {
        margin: theme.spacing(1),
        backgroundColor: "#009688",
        color: "white"
    },
    fab1: {
        margin: theme.spacing(1),
        backgroundColor: "#009688",
        color: "white",
        marginTop: "-5em",
        marginLeft: "11em"
    },
    formControl: {
        width: "30em",
        color: "white"
    },
    checkboxStyle: {
        color: '#009688 !important'
    }
}));

export default function ShowPhoto() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
    });
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container className={classes.containerStyle} justify="center">
                <Grid item md={6} xs={12}>
                    <Avatar src={'https://fuckingtonpost.files.wordpress.com/2013/08/323-brasil-la-propuesta-del-congreso-serc3ada-un-desastre-absoluto-para-los-indc3adgenas.jpg'} className={classes.photo} />
                </Grid>
                <Grid item xs={12}>
                    <Fab aria-label="add" className={classes.fab1}>
                        <i class="material-icons">insert_photo</i>
                    </Fab>
                </Grid>
                <Grid item xs={12}>
                    <h1 className={classes.name}>Atzin, Jilotepec</h1>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.bio}> Hablo mixteco, Otomi y Nahuatl, busco amigos para la peda y el amor</h4>
                </Grid>
                <Grid item xs={3}>
                Editar
                    <Fab aria-label="add" className={classes.fab}>
                       <i class="material-icons">edit</i>
                    </Fab>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.name}>Quiero conocer gente de:</h4>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={classes.checkboxStyle}
                                checked={state.checkedA}
                                onChange={handleChange('checkedA')}
                                value="checkedB"
                            />
                        }
                        label="Nahuas"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={classes.checkboxStyle}
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                            />
                        }
                        label="Mayas"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={classes.checkboxStyle} 
                                checked={state.checkedC}
                                onChange={handleChange('checkedC')}
                                value="checkedB"
                            />
                        }
                        label="Zapotecas"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={classes.checkboxStyle}
                                checked={state.checkedD}
                                onChange={handleChange('checkedD')}
                                value="checkedB"
                            />
                        }
                        label="Mixtecas"
                    />
                </Grid>
            </Grid>
        </div>
    );
}