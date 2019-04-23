import React, { Component } from "react";
import { connect } from "react-redux";
import { onInputChange, onLogin, onRegister } from "../actions";

import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/rigester";

class Forms extends Component {
  register = event => {
    this.props.onRegister(
      event,
      this.props.fName,
      this.props.lName,
      this.props.email,
      this.props.password,
      this.props.mailFormat,
      this.props.history
    );
    console.log(this.props.onRegister);
  };

  logIn = event => {
    this.props.onLogin(
      event,
      this.props.email,
      this.props.password,
      this.props.mailFormat,
      this.props.history
    );
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
    onRegister
  }
)(Forms);
