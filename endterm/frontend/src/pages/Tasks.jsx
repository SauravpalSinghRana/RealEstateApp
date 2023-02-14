import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tasks = () => {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/task" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
    
    <h3 id="h1">List Of Properties</h3>
    <div id="div1">
       
      <div className="head">
     
      <div className="tasks">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <h3>{task.task}</h3>
            <p>{task.desc}</p>
            <button type="button" class="btn btn-danger" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
            <Link to={`/update/${task.id}`} class="btn btn-primary">Update</Link>
            <Link to="/" class="btn btn-primary">Home Page</Link>
          </div>
        ))}
      </div>
      
      
        {/* <Link to="/Add">List New Property</Link> */}
        <Link to="/Add" class="btn btn-success">List New Property</Link>
      
      </div>
    </div>
    </div>
  );
};

export default Tasks;
