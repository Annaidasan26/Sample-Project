import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import Team from "./Components/Team";
import Projects from "./Components/Projects";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/dashboard" Component={Dashboard}></Route>
        <Route path="/form" Component={Form}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/team" Component={Team}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
