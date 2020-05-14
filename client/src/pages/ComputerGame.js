import React, {useState, useEffect } from "react";
import Nav2 from "../components/Nav2";
import ComputerForm from "../components/ComputerForm";


function ComputerGame() {

  return(
    <div>
    <h1>This is the Computer Game Page!</h1>
    <Nav2 />
    <ComputerForm />
    </div>
  )
};

export default ComputerGame;