import React from "react";
import Nav2 from "../components/Nav2";
import Profiler from "../components/Profiler";


function Profile() {
  var userObj={};
  userObj = JSON.parse(localStorage.getItem("userData"))
  if (!userObj) {
    userObj={};
  }
  let userName = userObj.username;
  let favTeam = userObj.favoriteTeam;
  return(
    
    <div>
    <h1>
        My Profile {userObj ? `- [${userName}]` : ""}
      </h1>
    <Nav2 />
    <Profiler />
    </div>
  )
};

export default Profile;