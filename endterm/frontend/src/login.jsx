import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const Add =()=>{
return (
 <div class="bg1" >
    <div className="head">
      <h1>Login Details</h1>
      <input type="text" placeholder="ID" required name="task"/>
      <input type="password" placeholder="Password"name="desc" />

      {/* <button  className="formButton"><Link to="/task">Log in</Link></button> */}
      <Link to="/task" class="btn btn-primary">Log in</Link>
    </div>
    </div>
  );
};

export default Add;
