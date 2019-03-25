import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/Nav/navBar";
import "./App.css";
import Home from "./Containers/home";
import Footer from "./components/Footer/Footer";
// import SignIn from "./components/SignIn/SignIn";
// import Register from "./components/Register/rigester";
import DetailPage from "./components/EventsDetails/DetailPage";
import NotFound from "./components/NotFound/NotFound";
import Forms from './Containers/froms';

class App extends Component {
  state = {
    isLogedIn: false,
  };

  render() {

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forms/:formName" component={Forms} />
          {/* <Route
            path="/signin"
            component={() => <SignIn formatedEmail={this.state.formatedEmail} logIn={this.logIn} />}
          />
          <Route
            path="/register"
            component={() => <Register register={this.register} />}
          /> */}
          <Route path="/eventDetail/:id" component={DetailPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
