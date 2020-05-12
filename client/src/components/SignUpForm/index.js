import React from "react";
import "./style.css";


function SignUpForm() {
  return(
    <form action="action_page.php">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter your Name" name="name" required />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
  )
}


export default SignUpForm;