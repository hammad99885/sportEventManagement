import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions/index";

const ProfileInfo = props => {
  const { user, logOut } = props;
  const { details, firstName, lastName, fullName, role } = user;

  const onLogOut=()=>{
    console.log(props.history.replace)
    props.history.replace("/")
    props.logOut()
  }

  return (
    <div className="panel rounded shadow bg-light">
      <div className="panel-body">
        <div className="inner-all">
          <ul className="list-unstyled">
            <li className="text-center">
              <img
                data-no-retina=""
                className="img-circle img-responsive img-bordered-primary"
                src={details ? details.profileImgUrl : ""}
                alt="John Doe"
              />
            </li>
            <li className="text-center">
              <h4 className="text-capitalize">{fullName}</h4>
              <p className="text-muted text-capitalize">{role}</p>
            </li>
            <li>
              <a href="" className="btn btn-success text-center btn-block">
                PRO Account
              </a>
            </li>
            <li>
              <br />
            </li>
            <li>
              <div className="btn-group-vertical btn-block">
                <a href="" className="btn btn-default">
                  <i className="fa fa-cog pull-right" />
                  Edit Account
                </a>
                <button onClick={onLogOut} className="btn btn-default">
                  <i className="fa fa-sign-out pull-right" />
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
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
  { logOut }
)(ProfileInfo);
