import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  HashRouter
} from "react-router-dom";
import { connect } from "react-redux";
// DashBoard

import { userStat } from "./actions/index";

import NavBar from "./components/Nav/navBar";
import "./App.css";
import Home from "./Containers/home";
import Footer from "./components/Footer/Footer";
import DetailPage from "./components/EventsDetails/DetailPage";
import NotFound from "./components/NotFound/NotFound";
import Forms from "./Containers/froms";

import Profile from "./Containers/Profile";
// import DashBoard from './AdminDashboard/index';
import AddEventFrom from './Admin/AddEventForm';

class App extends Component {
  constructor(props) {
    super(props);
    props.userStat();
  }
  render() {
    // this.props.authStatus?this.props.histroy.replace("/"):;
    // console.log(this.props.history.replace)
    // if(this.props.authStatus){
    //   this.props.history.replace("/")
    // }
    return (
      <React.Fragment>
        {/* <button onClick={this.props.userStat}>test</button> */}
        <NavBar {...this.props} />
        {/* <HashRouter> */}
          <Switch>
            <Route path="/dashBoard" component={AddEventFrom}/>
            <Route path="/" exact component={Home} />
            <Route path="/forms/:formName" component={Forms} />
            <Route path="/profile" component={Profile} />
            <Route path="/eventDetail/:id" component={DetailPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        {/* </HashRouter> */}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.AuthReducer.authStatus
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { userStat }
  )(App)
);
