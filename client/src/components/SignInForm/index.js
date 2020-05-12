import React from "react";
import "./style.css";

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

    <button type="submit">Login</button>
  </div>

  <div class="container" >
    <span class="psw">Forgot <a href="https://account.live.com/password/reset">password?</a></span>
  </div>
</form>
  )
}

export default SignInForm;