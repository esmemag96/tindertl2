import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ShowPhotoActions from './redux/ShowPhoto/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Poppins', sans-serif",
    minHeight: '100vh',
  },
  containerStyle: {
    color: "black",
    width: "50%",
    display: "inline-flex",
    backgroundColor: "white",
    border: "8px solid black",
    borderRadius: "22px",
    fontFamily: "'Poppins', sans-serif",
  },
  fab: {
    margin: theme.spacing(1),
    backgroundColor: "#009688",
    color:"white"
  },
  photo: {
      width:"100%"
  }
}));



let ShowPhoto = function ShowPhoto({current, personas, like, dislike, getAnother, fetchAll}) {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid container className={classes.containerStyle}>
        <Grid item xs={12} m={6}>
          <h1 className={classes.name}>{current.nombre}</h1>
        </Grid>
        <Grid item xs={12}>
          <img className={classes.photo} src={current.photo} alt="Photo didn't load :("></img>
        </Grid>
        <Grid item xs={12}>
          <h4 className={classes.bio}> {current.bio}</h4>
        </Grid>
        <Grid item xs={6}>
            <Fab aria-label="add" className={classes.fab}>
                <i className="material-icons">thumb_down</i>
            </Fab>
        </Grid>
        <Grid item xs={6}>
            <Fab aria-label="add" className={classes.fab}>
                <i className="material-icons" >thumb_up</i>
            </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state){
  return state.profile;
}

function mapDispatchToProps(dispatch){
  return {
    like: ShowPhotoActions.like,
    dislike: ShowPhotoActions.dislike,
    getAnother: ShowPhotoActions.getAnother,
    fetchAll: ShowPhotoActions.fetchAll
  }
}

ShowPhoto.propTypes = {
    current: PropTypes.object.isRequired,
    personas: PropTypes.arrayOf(PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired
    })),
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    getAnother: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPhoto);