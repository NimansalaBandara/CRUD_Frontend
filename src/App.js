import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router";
import React from "react";
import Nav from "./Components/Nav/Nav";
import User from "./Components/AddUsers/User";
import Details from "./Components/UserDetails/Details";
function App() {
  return (
    <div>
      <Home></Home>
      <Nav></Nav>
      <React.Fragment>
        <Routes>
        
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<User />} />
          <Route path="/user details" element={<Details/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
