import React from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";
import five from "./images/1st.jpg";
import six from "./images/2nd.jpg";
import three from "./images/3rd.jpg";
import four from "./images/4rd.jpg";
import one from "./images/5th.jpg";
import two from "./images/6th.jpg";


const Home=() =>{
    return(
  <>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <img src={logo} id="logo" alt="" height={90} width/>

    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/contact">Contact Us</a>
        </li>
        
       
      </ul>
      {/* <button type="button" class="btn"><Link to="/Login">Login</Link></button> */}
      <Link to="/Login" class="btn btn-success">Log In</Link>
    {/* <button type="button" class="btn btn-info"><Link to="/Signup">Sign up</Link></button> */}
    <Link to="/Signup" class="btn btn-primary">Sign Up</Link>
    </div>
  </div>
</nav>

<h1 id="head">Find a home you'll Love</h1>
<p className="p">We've got properties for everyone  </p>
<div class="row">
  <div class="column">
  <img src={one} class="rounded float-start" alt="" className="img" width={370}/>
<img src={two} class="rounded float-end" alt="" className="img" width={420}></img>
<img src={three} class="rounded float-end" alt="" className="img"width={370}></img>
  </div>
</div>

<div class="row">
  <div class="column">
  <img src={four} class="rounded float-end" alt="" className="img"></img>
<img src={five} class="rounded float-end" alt="" className="img"></img>
<img src={six} class="rounded float-end" alt="" className="img"></img>
  </div>
</div>




  </>
    );
};

export default Home;
