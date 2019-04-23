import React, { Component } from "react";
import ProfileCover from "../components/ProfileCover";
import ProfileInfo from "../components/ProfileInfo";
import ProfileContact from "../components/ProfileContact";

const Profile =(props)=> {
  // state = {  }
    return (
      <div className="profiles pt-5 pb-3 bg-dark">
        <div className="container bootstrap snippets">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <ProfileInfo {...props}/>
              <ProfileContact/>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8">
                <ProfileCover/>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Profile;
