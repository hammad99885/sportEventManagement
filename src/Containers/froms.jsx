import React, { Component } from "react";
import { connect } from "react-redux";
// import Joi from "Joi";
import { onInputChange, onLogin, onRegister, invalidCredits } from "../actions";

import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/rigester";
import Joi from "joi";

class Forms extends Component {
  state = {
    loginSchema: Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    }),
    registerSchema: Joi.object().keys({
      firstName: Joi.string()
        .required()
        .min(5),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .required()
    })
  };
  register = event => {
    event.preventDefault();
    Joi.validate(
      {
        firstName: this.props.fName,
        lastName: this.props.lName,
        email: this.props.email,
        password: this.props.password
      },
      this.state.registerSchema
    )
      .then(succ => {
        this.props.onRegister(succ, this.props.history);
      })
      .catch(e => {
        console.log(e.details[0].message);
        this.props.invalidCredits(e.details[0].message);
      });
  };

  logIn = event => {
    event.preventDefault();
    Joi.validate(
      { email: this.props.email, password: this.props.password },
      this.state.loginSchema
    )
      .then(succ => {
        this.props.onLogin(succ, this.props.history);
      })
      .catch(e => {
        console.log(e.details[0].message);
        this.props.invalidCredits(e.details[0].message);
      });
  };

  render() {
    const FromName = this.props.match.params.formName;
    if (FromName === "login") {
      return (
        <SignIn logIn={this.logIn} changeHandler={this.props.onInputChange} />
      );
    } else if (FromName === "register") {
      return (
        <Register
          changeHandler={this.props.onInputChange}
          register={this.register}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.AuthReducer.authStatus,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    mailFormat: state.AuthReducer.mailFormat,
    fName: state.AuthReducer.Fname,
    lName: state.AuthReducer.Lname
  };
};

export default connect(
  mapStateToProps,
  {
    onInputChange,
    onLogin,
    onRegister,
    invalidCredits
  }
)(Forms);
