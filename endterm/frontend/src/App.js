import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tasks from "./pages/Tasks";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./login";
import Signup from "./singup";

import "./styles.css"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
      <Route path="/task" element={<Tasks/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
