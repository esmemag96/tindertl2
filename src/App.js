import React, { useEffect, useState } from 'react' 
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
import ShowPhoto from './ShowPhoto'
import { withAuthenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'
import { API, graphqlOperation } from 'aws-amplify'
import { listCoins } from './graphql/queries'

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
  const [coins, updateCoins] = useState([])

  useEffect(() => {
    getData()
  }, [])
  // useEffect(() => {
  //   Auth.currentAuthenticatedUser()
  //     .then(user => console.log({ user }))
  //     .catch(error => console.log({ error }))
  // })
  async function getData() {
    try {
      const coinData = await API.graphql(graphqlOperation(listCoins))
      console.log('data from API: ', coinData)
      updateCoins(coinData.data.listCoins.items)
    } catch (err) {
      console.log('error fetching data..', err)
    }
  }
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

export default withAuthenticator(App, { includeGreetings: true })
