import React from 'react';
import axios from 'axios';



class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/register";
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
        <h2>Sign Up</h2>
        <form onSubmit = {this.submitHandler}>
          <div>
            <label htmlFor = "username" />
            Username&nbsp;
            <input
              id = "username"
              onChange = {this.handleChange}
              value = {this.state.username}
              type = "text"
            />
          </div>
          <div>
            <label htmlFor = "password" />
            Password&nbsp;&nbsp;
            <input
              id = "password"
              onChange = {this.handleChange}
              value = {this.state.password}
              type = "password"
            />
          </div>
          <div>
            <button className = 'btn' type = "submit">Sign Up</button>
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;