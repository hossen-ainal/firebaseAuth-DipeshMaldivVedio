import React from "react";
import { Link } from "react-router-dom";

function Signup(props) {
  return (
    <div>
      <h1>Signup Now</h1>
      <form>
        <input type="email" placeholder="write Email" />
        <br></br> <br></br>
        <input type="password" placeholder="write passwrod" />
        <br></br> <br></br>
        <input type="submit" value="Signup Now" />
        <br></br> <br></br>
        <p>
          If you already singup? <Link to="/Login">Log in</Link>
          If you already singup? <Link to="/Contact">Contact Page</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
