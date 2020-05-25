import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <div className="resultWrapper">
    <h2>
      {resultsObj.isTie ? "It's a TIE!" : ""}
    </h2>
    <Row id="resrow">
      <Col>
      <h2 id="winner">WINNER</h2>
      <div className="winner">
      <span id="winTeam"
      >
      {resultsObj ? resultsObj.winner : "Please start a game"}
      </span>
      <p>
        ---Starting Lineup---
      </p>
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
      <p>
      ---Box Scores---
      </p>
      </div>        
      </Col>
      <Col>
      <h2 id="loser">LOSER</h2>
      <div className="winner">
      <span id="loseTeam"
        >
        {resultsObj ? resultsObj.loser : "Please start a game"}
        </span>
        <p>
        ---Starting Lineup---
      </p>

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
        <p>
        ---Box Scores---
        </p>
      </div>
      </Col>
      </Row>
      </div>
  )
}

export default ResultsLoad;