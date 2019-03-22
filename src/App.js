import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav/navBar";
import "./App.css";
import Home from "./Containers/home";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/rigester";
import DetailPage from "./components/EventsDetails/DetailPage";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  state = {
    isLogedIn: false
  };

  register = (fName, lName, fullName, Email, password) => {
    console.log(fName, lName, fullName, Email, password);
    // e.value
  };
  render() {
    // const test
    // console.log(document.location.pathname)
    // if(document.location.pathname === "signin"){
    //   test =null;
    // }else{
    //    test = <NavBar/>
    // }
    return (
      <React.Fragment>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route
          path="/register"
          component={() => <Register register={this.register} />}
        />
        <Route path="/eventDetail/:id" component={DetailPage} />
        <main className="container">
        </main>
        <Route path="not Found" component={NotFound}></Route>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
