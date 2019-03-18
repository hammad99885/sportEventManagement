import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav/navBar";
import "./App.css";
import Home from "./Containers/home"
import Footer from './components/Footer/Footer';
import SignIn from "./components/SignIn/SignIn";
import Register from './components/Register/rigester';

class App extends Component {
  render() {
    // const test
    console.log(document.location.pathname) 
    // if(document.location.pathname === "signin"){
    //   test =null;
    // }else{
    //    test = <NavBar/> 
    // }
    return (
      <React.Fragment>
        
        
        <NavBar/>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn}/>
        <Route path="/register" component={Register}/>
        <main className="container">
          <Switch>
            {/* <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" /> */}
          </Switch>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
