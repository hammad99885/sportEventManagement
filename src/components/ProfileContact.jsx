import React from "react";
import { connect } from "react-redux";

const ProfileContact = ({ user }) => {
  console.log(user);
  return (
    <div className="panel panel-theme rounded shadow bg-light pt-2">
      <div className="panel-heading">
        <div className="pull-left w-100">
          <h3 className="panel-title text-center w-100">Contact</h3>
        </div>
        {/* <div className="pull-right">
          <a href="#" className="btn btn-sm btn-success">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" className="btn btn-sm btn-success">
            <i className="fa fa-twitter" />
          </a>
          <a href="#" className="btn btn-sm btn-success">
            <i className="fa fa-google-plus" />
          </a>
        </div> */}
        <div className="clearfix" />
      </div>
      <div className="panel-body no-padding rounded">
        <ul className="list-group no-margin">
          <li className="list-group-item">
            <i className="fa fa-envelope m-2" /> {user.email}
          </li>
          <li className="list-group-item">
            <i className="fa fa-globe mr-2" /> www.bootdey.com
          </li>
          <li className="list-group-item">
            <i className="fa fa-phone mr-2" />
            {"phoneNo" in user.details ? (
              user.details.phoneNo
            ) : (
              <button className="btn btn-light">add number</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.AuthReducer.userData
  };
};

export default connect(
  mapStateToProps,
  {}
)(ProfileContact);
