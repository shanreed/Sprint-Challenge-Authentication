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
        <menu>
        <NavLink  to="/signin" >
          <button className = 'active nav-btn'>SignIn</button>
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <NavLink  to="/signup" >
        <button className = 'active nav-btn'>SignUp</button>
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <NavLink  to="/jokes">
        <button className = 'active nav-btn'>Jokes</button>
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        
        <button className = 'active nav-btn'onClick = {logout}>
          Logout
        </button>
        </menu>
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