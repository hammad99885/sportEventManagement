import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

const NotFound = () => {
  
    const history = createBrowserHistory()
    console.log(history);
  return (
    <React.Fragment>
      <div
        className="backgroundLinear1 text-light pt-5 pb-5 "
        style={{ "min-height": "70vh" }}
      >
       <div className="container">
       <h1 className="display-1">Not Found</h1>
        <p>
          The addresss you are trying to access isn't valid or may not avaliable
          at the moment
        </p>
        <button className="btn btn-light m-2" onClick={history.goBack}>go back</button>
        <span className="lead m-2">or</span>
        <Link className="btn btn-outline-light m-2" to="/">Go to Home</Link>
       </div>
      </div>
    </React.Fragment>
  );
};
export default NotFound;
