import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';


import "./App.css";
import SignIn from './auth/SignIn.js';
import SignUp from './auth/SignUp.js';
import JokesList from './jokes/Jokes';

function App() {
  return (
    <>
      <header>
        <NavLink to="/signin" >
          SignIn
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <NavLink to="/signup" >
         SignUp
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <NavLink to="/jokes">
          Jokes
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        
      </header>
      <main>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/jokes" component={JokesList} />
        
      </main>
    </>
  );
      }

export default withRouter(App);