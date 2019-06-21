import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';


import "./App.css";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import JokesList from './components/jokes/Jokes';

function App(props) {
function logout() {
    localStorage.removeItem("jwt");
    props.history.push("/signin");
  }


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
        
        <button onClick = {logout}>
          Logout
        </button>
        
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