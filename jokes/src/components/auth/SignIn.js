import React from "react";
import axios from "axios";



class SignIn extends React.Component {
  state = {
    username: "shannon",
    password: "password"
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  submitHandle = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <>
        <h2>Sign In</h2>
        <form onSubmit={this.submitHandle}>
          <div>
            <label htmlFor="username" />
            Username:
            <input
              id = "username"
              onChange = {this.handleChange}
              value = {this.state.username}
              type = "text"
              
            />
          </div>
          <div>
            <label htmlFor="password" />
            Password:
            <input
              id="password"
              onChange = {this.handleChange}
              value = {this.state.password}
              type = "password"
        
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </>
    );
  }
}

export default SignIn;