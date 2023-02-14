import React from "react";
import { Link } from "react-router-dom";
const sign =()=>{
return (
  <div class="background">
    <div className="head">
      <h1>Create New Account</h1>
      <input type="text" placeholder="Name" required name="task"/>
      <input type="text" placeholder="User Name" required name="task"/>
      <input type="email" id="email" placeholder="Email" pattern=".+@globex\.com" size="30" required/>
      <input type="password" placeholder="Password"name="desc" />

     
      <Link to="/" class="btn btn-success">Sign Up</Link>
    </div>
    </div>
  );
};

export default sign;
