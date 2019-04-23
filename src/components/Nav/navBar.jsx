import React from "react";
import { Link } from "react-router-dom";
// import "./css/NavBar.css"
import { connect } from "react-redux";
import { logOut } from '../../actions/index';

const NavBar = (props) => {
  const {loginStatus, user, logOut} = props

  const onLogOut=()=>{
    console.log(props.history.replace)
    props.history.replace("/")
    props.logOut()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mr-5" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              About
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Events
            </Link>
            <div
              className="dropdown-menu bg-dark text-light"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item text-light" to="/">
                Action
              </Link>
              <Link className="dropdown-item text-light" to="/">
                Another action
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item text-light" to="/">
                Something else here
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Manage
            </Link>
            <div
              className="dropdown-menu bg-dark text-light"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item text-light" to="/">
                Action
              </Link>
              <Link className="dropdown-item text-light" to="/">
                Another action
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item text-light" to="/">
                Something else here
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Contact Us
            </Link>
          </li>
        </ul>

        {!loginStatus?<ul className="navbar-nav mr-5">
        
        <li className="nav-item mr-4">
          <Link className="nav-link" to="/forms/login">
            Sign In
          </Link>
        </li>
        <li className="">
          <Link to="/forms/register" className=" btn btn-outline-light">
            Sign Up
          </Link>
        </li>
      </ul>:<ul className="navbar-nav mr-5">
        
        <li className="nav-item mr-4">
          <Link className="nav-link" to="/profile">
            {user.fullName}
          </Link>
          
        </li>
        <li className="btn btn-outline-light" onClick={onLogOut}>Logout</li>
      </ul>
    }
        
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    loginStatus: state.AuthReducer.userLoggedIn,
    user: state.AuthReducer.userData,
    
  };
};

export default connect(
  mapStateToProps,
  {logOut}
)(NavBar);
