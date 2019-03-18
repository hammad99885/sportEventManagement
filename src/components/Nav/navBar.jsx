import React from "react";
import { Link } from "react-router-dom";
// import "./css/NavBar.css"

const NavBar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     Vidly
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div className="navbar-nav">
    //       <NavLink className="nav-item nav-link" to="/movies">
    //         Movies
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to="/customers">
    //         Customers
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to="/rentals">
    //         Rentals
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to="/login">
    //         Login
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to="/register">
    //         Register
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand mr-5" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Events
          </Link>
          <div className="dropdown-menu bg-dark text-light" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item text-light" to="/">Action</Link>
            <Link className="dropdown-item text-light" to="/">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item text-light" to="/">Something else here</Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manage
          </Link>
          <div className="dropdown-menu bg-dark text-light" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item text-light" to="/">Action</Link>
            <Link className="dropdown-item text-light" to="/">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item text-light" to="/">Something else here</Link>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">Contact Us</Link>
        </li>
        

        

        
      </ul>

      <ul className="navbar-nav mr-5">
        <li className="nav-item mr-4">
        <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
          <li className="">
            <Link to="/register" className=" btn btn-outline-light">Sign Up</Link>
          </li>
      </ul>
     
    </div>
  </nav>
  );
};

export default NavBar;
