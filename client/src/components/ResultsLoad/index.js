import React, {Component} from "react";
import "./style.css";
//import { teamExport } from "../ComputerForm";

function ResultsLoad() {
var resultsObj={};
resultsObj = JSON.parse(localStorage.getItem("gametime"))
if (!resultsObj) {
  resultsObj={};
}
let team1Players = [];
team1Players.push(resultsObj.team1.players[0])
console.log("this is the results object: ", resultsObj)
console.log("these are the team1 players: ", team1Players)

  return(
    <div className="wrapper">
      <div className="row" id="resrow">
      <div className="winner col-sm-6">
        <h2>WINNER</h2>
        </div>
      <div className="loser col-sm-6">
        <h2>LOSER</h2>
      </div>
      
      </div>
      <div className="row" id="resrow">
      <div className="winner col-sm-6">
        <span id="winTeam"
        >
        {resultsObj ? resultsObj.winner : "Please start a game"}
        </span>
        <ul id="players">
        <li>
          
        </li>
        </ul>
      </div>
      <div className="loser col-sm-6">
        <span id="loseTeam"
        >
        {resultsObj ? resultsObj.loser : "Please start a game"}
        </span>
      </div>
      </div>

    </div>
  )
}

export default ResultsLoad;