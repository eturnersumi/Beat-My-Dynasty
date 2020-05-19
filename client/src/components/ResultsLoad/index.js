import React from "react";
import "./style.css";
//import { teamExport } from "../ComputerForm";

function ResultsLoad() {
var resultsObj={};
resultsObj = JSON.parse(localStorage.getItem("gametime"))
if (!resultsObj) {
  resultsObj={};
}
let team1Players = {};
let team2Players = {};
team1Players = resultsObj.team1.players[0];
team2Players = resultsObj.team2.players[0];
//team1Players.push(resultsObj.team1.players[0])
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
        <ol id="players">
          <li id="playpos">
          {team1Players.PG} (PG)
          </li>
          <li>
          {team1Players.SG} (SG)
          </li>
          <li>
          {team1Players.SF} (SF)
          </li>
          <li>
          {team1Players.PF} (PF)
          </li>
          <li>
          {team1Players.C} (C)
          </li>
        </ol>
      </div>
      <div className="loser col-sm-6">
        <span id="loseTeam"
        >
        {resultsObj ? resultsObj.loser : "Please start a game"}
        </span>
        <ol id="players">
          <li id="playpos">
          {team2Players.PG} (PG)
          </li>
          <li>
          {team2Players.SG} (SG)
          </li>
          <li>
          {team2Players.SF} (SF)
          </li>
          <li>
          {team2Players.PF} (PF)
          </li>
          <li>
          {team2Players.C} (C)
          </li>
        </ol>
      </div>
      </div>

    </div>
  )
}

export default ResultsLoad;