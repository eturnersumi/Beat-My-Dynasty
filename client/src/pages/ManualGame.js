import React, { useState, useEffect } from "react";
import Nav2 from "../components/Nav2";
import ManualForm from "../components/ManualForm";
import API from "../utils/API";
import { Link } from "react-router-dom";


function ManualGame() {
  
  return(
    <div>
    
    <Nav2 />
    <ManualForm /> 
      
    </div>
  )
};

export default ManualGame;