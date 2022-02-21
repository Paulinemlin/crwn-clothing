import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input.component.jsx/form-input";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
  signInFailure,
  signInSuccess

} from "../../redux/user/user.actions";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="p-2 w-1/3 container mx-auto max-w-5xl mt-12 ">
        <h2 className="text-xl font-bold">Welcome back</h2>
        <span>
          Connectez-vous avec votre <strong>email</strong> et votre{" "}
          <strong>mot de passe</strong>
        </span>
        <form onSubmit={this.handleSubmit} action="">
          <div className="mt-12">
            <FormInput
              type="text"
              name="email"
              value={this.state.email}
              label="Email"
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <FormInput
              type="password"
              name="password"
              label="password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
          </div>

          <div className="w-ful">
            <CustomButton onClick={this.handleSubmit}>
              Se connecter
            </CustomButton>
            <CustomButton
              isGoogleSignIn
              type="button"
              onClick={googleSignInStart}
            >
              Connexion avec Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
