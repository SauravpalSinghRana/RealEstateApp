import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import about from "./images/about.jpg";

const About = () => {
  return (
    <>
    <h1 id="about">About Us</h1>
      <div className="header">
        <p id="p1">
            <h1>Who We Are?</h1>
            <h3>We help people find their home with the help of this application</h3>
            <h3 id="h31">The content of a website includes the text, images,
                 and animations that users experience on a website</h3>
            
        </p>
      <img src={about} class="rounded float-end" alt="" className="img1"></img>
      </div>
    </>
  )
}

export default About
