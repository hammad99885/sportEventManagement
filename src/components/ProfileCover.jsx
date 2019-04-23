import React from "react";
import { connect } from 'react-redux';

const ProfileCover = ({user}) => {
  return (
    <div className="profile-cover">
      <div className="cover rounded shadow no-overflow">
        <div className="inner-cover">
          {/* <!-- Start offcanvas btn group menu: This menu will take position at the top of profile cover (mobile only). --> */}
          <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
            <button
              type="button"
              className="btn btn-theme btn-sm dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-bars" />
            </button>
            <ul className="dropdown-menu pull-right no-border" role="menu">
              <li className="active">
                <a href="#">
                  <i className="fa fa-fw fa-clock-o" /> <span>Timeline</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-fw fa-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-fw fa-photo" /> <span>Photos</span>{" "}
                  <small>(98)</small>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-fw fa-users" />
                  <span> Friends </span>
                  <small>(23)</small>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-fw fa-envelope" /> <span>Messages</span>{" "}
                  <small>(7 new)</small>
                </a>
              </li>
            </ul>
          </div>
          <img
            src={user.details.CoverImgUrl}
            className="img-responsive full-width"
            alt="cover"
            style={{ maxHeight: "200px" }}
          />
        </div>
        <ul className="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
          <li className="active">
            <a href="#">
              <i className="fa fa-fw fa-clock-o" /> <span>Timeline</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-fw fa-user" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-fw fa-photo" /> <span>Photos</span>{" "}
              <small>(98)</small>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-fw fa-users" />
              <span> Friends </span>
              <small>(23)</small>
            </a>
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
  )(ProfileCover);
