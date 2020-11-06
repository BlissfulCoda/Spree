import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
      const {value, name} =  event.target;
      this.setState({[name]: value})
  }

  render() {
    return (
      <div className="signIn">
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Email</label>
          <input name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
