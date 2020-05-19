import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SignInForm() {
  return(
    <form action="action_page.php" method="post" >
  <div class="imgcontainer">
    <img className="signin" src={require("../../images/basketball_image.jpg")} alt="Avatar" class="avatar" />
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button 
    id="signin"
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
      <input type="checkbox" checked="checked" name="remember" /> Remember me
      
    </label>
  </div>

  <div class="container" >
  <button 
  type="button" 
  class="cancelbtn">
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
    <span class="psw">Forgot <a href="https://account.live.com/password/reset">password?</a></span>
  </div>
</form>
  )
}

export default SignInForm;