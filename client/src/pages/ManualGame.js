import React, { useState, useEffect } from "react";
import Nav2 from "../components/Nav2";
import ManualForm from "../components/ManualForm";
import API from "../utils/API";
import { Link } from "react-router-dom";


function ManualGame() {
  
  return(
    <div>
    <h1>This is the Manual Game Page!</h1>
    <Nav2 />
    <ManualForm /> 
      
    </div>
  )
};

export default ManualGame;