import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/rigester";

class Forms extends Component {
  state = {
    mailFormat: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    incorrectCredits: false,
    formatedEmail: true,
    formatedPassword: true
  };

  register = (e, fName, lName, fullName, email, password) => {
    e.preventDefault();
    if (email.match(this.state.mailFormat)) {
      // code to execute goes here
      console.log(fName, lName, fullName, email, password, e);
    }
    // e.value
  };


  logIn = (e, email, password) => {
    e.preventDefault();
    this.setState({ formatedEmail: true, formatedPassword: true });
    if (email.match(this.state.mailFormat) && password !== "") {
      console.log(email, password);
      console.log("test")
      this.setState({ formatedEmail: true, formatedPassword: true });
    } else {
      if (!email.match(this.state.mailFormat) || email === "") {
        this.setState({ formatedEmail: false });
      }

      if (password === "") {
        this.setState({ formatedPassword: false });
      }

      console.log("testf")
    }
  };
  render() {
    // console.log(this.props.match.params.formName)
    const FromName = this.props.match.params.formName;
    if (FromName === "login") {
      return (
        <SignIn
          formatedEmail={this.state.formatedEmail}
          formatedPassword={this.state.formatedPassword}
          logIn={this.logIn}
        />
      );
    } else if (FromName === "register") {
      return <Register register={this.register} />;
    }
  }
}

export default Forms;

//     <Switch>
//     <div>abc</div>
//         <Route
//     path="/forms/signin"
//     component={() => <SignIn formatedEmail={this.state.formatedEmail} logIn={this.logIn} />}
//   />
//   <Route
//     path="froms/register"
//     component={() => <Register register={this.register} />}
//   />
//     </Switch>
