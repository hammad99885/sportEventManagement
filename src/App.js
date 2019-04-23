import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import NavBar from "./components/Nav/navBar";
import "./App.css";
import Home from "./Containers/home";
import Footer from "./components/Footer/Footer";
// import SignIn from "./components/SignIn/SignIn";
// import Register from "./components/Register/rigester";
import DetailPage from "./components/EventsDetails/DetailPage";
import NotFound from "./components/NotFound/NotFound";
import Forms from './Containers/froms';

import { connect } from 'react-redux';
import Profile from './Containers/Profile';
import { userStat } from './actions/index';

class App extends Component {
  // state = {
  //   isLogedIn: false,
  // };
  constructor(props){
    super(props)
    props.userStat();
  }
  componentDidMount(){
    // userStat();
    // console.log("com")
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
        <NavBar {...this.props}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forms/:formName" component={Forms} />
          <Route path="/profile" component={Profile}/>
          <Route path="/eventDetail/:id" component={DetailPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps=state=>{
  return {
    authStatus :state.AuthReducer.authStatus,
  }
}

// export w
export default withRouter(connect(mapStateToProps,{userStat})(App));
