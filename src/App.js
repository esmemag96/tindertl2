import React from 'react';
import './App.css';
import AppHeader from './appHeader'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//Components
import Matches from './Matches'
import Home from './Home'
import Message from './Message'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#aa3a2a",
    fontFamily: "'Poppins', sans-serif"
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
          <Route path="/message/:id" component={Message} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
