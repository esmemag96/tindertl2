import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowPhoto from './ShowPhoto'
import CardMedia from "@material-ui/core/CardMedia";
import './App.css';


import Card from "./components/Card";
import CardDeck from "./container/CardDeck";
import PlaceholderImg from "./components/PlaceholderImg";
//import Deck from "./Deck";
import data from "./data";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#aa3a2a",
    fontFamily: "'Poppins', sans-serif",
    minHeight: '100vh',
  },

  perrito: {
    maxHeight: '90%',
    backgroundColor: 'red'
  }
}));



export default function Home() {
  const classes = useStyles();

  const state = {
    id: 0
  };

  let titles = [];

  data.forEach(element => {
    titles.push(element.name);
  });

  return (
    <div className="perrucho">
    <CardDeck
      cardDeckId={state.id}
    /*cards={this.cards}*/

    /*reverse*/
    /*displayNoCardsLeft*/
    >
      {Array.from(Array(12).keys()).map(index => (
          <Card title={titles[index]}>
            {data[index].text}
            <CardMedia src={data[index].pics[0]} component="img" />
            Edad: {data[index].age} <br/>
            Distancia: {data[index].distance}
          </Card>
      ))}

      <Card title="No hay mas personas disponibles" fixed>
        ):
      </Card>
    </CardDeck>
    </div>
  );
}
