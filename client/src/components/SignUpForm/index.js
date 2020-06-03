import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";


function SignUpForm() {

  const [userName, setUserName] = useState("");
  const [favTeam, setFavTeam] = useState("");
  
  var userObj = {
    "username": userName,
    "favoriteTeam": favTeam,
    "profileImage": ""
  }
  
  useEffect(() => {
    //console.log("this is the username: ", userName)
    //console.log("this is the fav team: ", favTeam)
    storage(userObj)
  })
  function storage(userObj) {
    localStorage.setItem("userData", JSON.stringify(userObj))
  }


  return(
  <form 
  action="action_page.php">
  <div className="container">
    <h1>Sign Up</h1>
    <p>Sign up for Beat My Dynasty below!</p>
    <hr />

    <label htmlFor="userName"><b>Username</b></label>
    <input 
    onChange={e => setUserName(e.target.value)}
    type="text" 
    placeholder="Enter a username" 
    name="userName" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    
    <label htmlFor="team"><b>Favorite NBA Team</b></label>
    <input 
    onChange={e => setFavTeam(e.target.value)}
    type="text" 
    placeholder="Enter your favorite NBA team" 
    name="team" required 
    
    />

    <div className="clearfix">
    <button 
    type="submit" 
    className="signupbtn"
    >
    <Link
      to= "/profile"
      className={window.location.pathname === "/profile"
      ? "nav-link active"
      : "nav-link"
      }
      >
      Sign Up
    </Link>
    </button>
    <button 
    type="button" 
    className="cancelbtn">
    <Link
    to= "/"
    className={window.location.pathname === "/"
    ? "nav-link active"
    : "nav-link"
    }
    >
    Cancel
    </Link>
    </button>
     
      
    </div>
  </div>
</form>
  )
}


export default SignUpForm;