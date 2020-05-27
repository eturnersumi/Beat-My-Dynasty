import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SignInForm() {

  const [userName, setUserName] = useState("");
  const [favTeam, setFavTeam] = useState("");
  
  var userObj = {
    "username": userName,
    "favoriteTeam": favTeam,
    "profileImage": ""
  }
  
  useEffect(() => {
    console.log("this is the username: ", userName)
    console.log("this is the fav team: ", favTeam)
    storage(userObj)
  })
  function storage(userObj) {
    localStorage.setItem("userData", JSON.stringify(userObj))
  }



  return(
    <form action="action_page.php" method="post" >
    <div className="container">
    <h1>Sign in</h1>
    <p> Sign in to your profile here</p>

  
    <label htmlFor="uname"><b>Username</b></label>
    <input 
    onChange={e => setUserName(e.target.value)}
    type="text" 
    placeholder="Enter Username" 
    name="uname" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button 
    id="signin2"
    type="submit"
    >
    <Link
    to= "/profile"
    className={window.location.pathname === "/profile"
    ? "nav-link active"
    : "nav-link"
    }
    >
    Sign In
  </Link>
    </button>
    <label>
      <input type="checkbox" defaultChecked name="remember" /> Remember me
      
    </label>
  </div>

  <div className="container" >
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
    <span className="psw">Forgot <a href="https://account.live.com/password/reset">password?</a></span>
  
  </div>
</form>
  )
}

export default SignInForm;