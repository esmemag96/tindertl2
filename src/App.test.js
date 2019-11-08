import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppHeader from './appHeader'
import AppFooter from './appFooter'
import Matches from './Matches'
import Home from './Home'
import Message from './Message'
import MyProfile from './MyProfile'
import ShowProfile from './ShowProfile'
import ShowPhoto from './ShowPhoto'
import "@testing-library/jest-dom/extend-expect"
import { render, cleanup } from "@testing-library/react"

import renderer from "react-test-renderer"

afterEach(cleanup)
/*
it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matches renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Matches />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Message renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('MyProfile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ShowProfile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

it("Functional test passed", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("Functional test passed", () => {
  const tree = renderer.create(<Matches />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("Functional test passed", () => {
  const tree = renderer.create(<Message />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("Functional test passed", () => {
  const tree = renderer.create(<MyProfile />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("Functional test passed", () => {
  const tree = renderer.create(<ShowProfile />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("Functional test passed", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
})
