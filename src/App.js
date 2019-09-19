import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//Components
import AppHeader from './appHeader'
import AppFooter from './appFooter'
import Matches from './Matches'
import Home from './Home'
import Message from './Message'
import MyProfile from './MyProfile'
import ShowProfile from './ShowProfile'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#aa3a2a",
    fontFamily: "'Poppins', sans-serif",
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/matches" component={Matches} />
          <Route path="/showprofile" component={ShowProfile} />
          <Route path="/message/:id" component={Message} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
