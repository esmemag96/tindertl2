import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Scrollbars from "react-custom-scrollbars";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import data from "../data";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default ({
  dragHandle,
  fixed,
  id = 0,
  title,
  image,
  isVisible,
  style,
  children
}) =>
  isVisible ? (
    <Wrapper style={style} raised>
      <Header {...dragHandle} title={title} fixed={fixed && fixed.toString()} />
      <CardContent>
        <Scrollbars autoHeight>{children}</Scrollbars>
      </CardContent>
    </Wrapper>
  ) : null;

const Header = styled(CardHeader)`
  cursor: ${props => (!props.fixed ? "pointer" : "auto")};
`;

const MainContent = styled.div`
  padding: 15px;
`;

const Wrapper = animated(styled(Card).attrs({
  //draggable: true
})`
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60%;
  transform-origin: 50% 50%;
  overflow: hidden;
`);
