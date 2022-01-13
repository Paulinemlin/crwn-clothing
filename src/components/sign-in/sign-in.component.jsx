import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input.component.jsx/form-input";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="p-2 w-1/2">
        <h2 className="text-xl font-bold">I already have a password</h2>
        <span>Sign in with your email and password</span>
        <form  onSubmit={this.handleSubmit} action="">
          <div className="mt-12">
            <FormInput
              type="text"
              name="email"
              value={this.state.email}
              label="email"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <FormInput
              type="text"
              name="password"
              label="password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="w-ful">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              className="mb-2"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
