import React, {Component} from "react";
import "./style.css";
//import { teamExport } from "../ComputerForm";

function ResultsLoad() {


  return(
    <div className="wrapper">
      <div className="row">
        <div className="winner">
        WINNER
        <span id="winTeam"
        
        >
        
        </span>
        </div>
      <div className="loser">
      LOSER
      <span id="loseTeam"
      
      >
      </span>
      </div>
      
      </div>

    </div>
  )
}

export default ResultsLoad;