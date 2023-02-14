import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [task, setTask] = useState({
    task: "",
    desc: "",
  });


  const navigate = useNavigate()
  const location =useLocation()
const taskId =location.pathname.split("/")[2]

 

  
  const handleChange = (e) =>{
    setTask(prev=>({...prev,[e.target.name]: e.target.value }))
  };
  
  const handleClick =async e =>{
    e.preventDefault()
    try{
 await axios.put(`http://localhost:8800/task${taskId}`,task);
navigate("/task")
    }
    catch(err){
console.log(err)
    }
  }

  return (
    <div className="head">
      <h1>Update Property Details</h1>
      <input type="text" placeholder="Type Of Property" onChange={handleChange} name="task"/>
      <input type="text" placeholder="Address" onChange={handleChange}  name="desc" />

      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
