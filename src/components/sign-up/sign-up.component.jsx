import React, { Component } from "react";
import FormInput from "../form-input.component.jsx/form-input";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    else {
        alert("ok")
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };


  handleChange = event => {
      const {name, value }= event.target;
      this.setState({[name] : value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h2>I do not have an accont</h2>
        <span>Sign Up with your email and password</span>

        <form action="form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirmPassword"
            required
          />

          <CustomButton type="submit" onClick={this.handleSubmit}>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
