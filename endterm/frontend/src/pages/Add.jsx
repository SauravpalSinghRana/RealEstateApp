import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [task, setTask] = useState({
    task: "",
    desc: "",
  });


  const navigate = useNavigate()

  const handleChange = (e) =>{
    setTask(prev=>({...prev,[e.target.name]: e.target.value }))
  };
  
  const handleClick =async e =>{
    e.preventDefault()
    try{
await axios.post("http://localhost:8800/task",task)
navigate("/task")
    }
    catch(err){
console.log(err)
    }
  }

  return (
    <div className="head">
      <h1>Details About Property</h1>
      
      <input type="text" placeholder="Type Of Property" required onChange={handleChange} name="task"/>
      
      <input type="text" placeholder="Address" onChange={handleChange}  name="desc" />

      <button type="button" class="btn btn-success" onClick={handleClick} className="formButton" required>Upload details</button>
    </div>
  );
};

export default Add;
