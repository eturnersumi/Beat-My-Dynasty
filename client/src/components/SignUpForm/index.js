import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function SignUpForm() {
  return(
    <form action="action_page.php">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Sign up for Beat My Dynasty below!</p>
    <hr />

    <label for="userName"><b>Username</b></label>
    <input type="text" placeholder="Enter a username" name="userName" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    
    <label for="team"><b>Favorite NBA Team</b></label>
    <input type="text" placeholder="Enter your favorite NBA team" name="team" required />

    

    <div class="clearfix">
      <button 
      type="submit" 
      class="signupbtn"
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
    </div>
  </div>
</form>
  )
}


export default SignUpForm;