import React from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <h1>Login Now</h1>
      <form>
        <input type="email" placeholder="write Email" />
        <br></br>
        <input type="password" placeholder="write passwrod" />
        <br></br>
        <input type="button" value="login now" />

        <p>
          If you do not singup? <Link to="/Signup">Go Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
