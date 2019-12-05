// initial state
import React, { useReducer } from 'react'
import { Auth } from 'aws-amplify'

// define initial state
const initialState = {
  username: '', password: '', email: ''
}

// create reducer
function reducer(state, action) {
  switch(action.type) {
    case 'SET_INPUT':
      return { ...state, [action.inputName]: action.inputValue }
    default:
      return state
  }
}

async function signUp() {
    const { username, password, email } = state
    try {
      await Auth.signUp({ username, password, attributes: { email }})
      console.log('user successfully signed up!')
    } catch (err) {
      console.log('error signing up user...', err)
    }
  }
  
  <button onClick={signUp}>Sign Up</button>
// useReducer hook creates local state
const [state, dispatch] = useReducer(reducer, initialState)

// event handler
function onChange(e) {
  dispatch({
    type: 'SET_INPUT',
    inputName: e.target.name,
    inputValue: e.target.value
  })
}

// example of usage with input
<input
  name='username'
  placeholder='username'
  value={state.username}
  onChange={onChange}
/>