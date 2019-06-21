import React from "react";
import axios from "axios";

import requiresAuth from '../auth/requiresAuth.js';

class JokesList extends React.Component {
  state = {
    jokes: []
  };


  componentDidMount() {
    const endpoint = "/jokes";
        axios
          .get(endpoint)
          .then(res => {
            this.setState({ jokes: res.data })
          })
          .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <h2>JOKES</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key = {joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </>
    );
  }

}

export default requiresAuth(JokesList);