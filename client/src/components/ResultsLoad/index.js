import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ResultsLoad() {
var resultsObj={};
let winnerPlayers = {};
let loserPlayers = {};
let finalScore;

resultsObj = JSON.parse(localStorage.getItem("gametime"))
if (!resultsObj) {
  resultsObj={};
}


if (resultsObj.winner === resultsObj.team1.team) {
  winnerPlayers = resultsObj.team1.players[0];
  loserPlayers = resultsObj.team2.players[0];
}
else {
  winnerPlayers = resultsObj.team2.players[0];
  loserPlayers = resultsObj.team1.players[0];
}

finalScore = 103;
//team1Players.push(resultsObj.team1.players[0])
console.log("this is the results object: ", resultsObj)


  return(
    <div className="resultWrapper">
    <h2>
      {resultsObj.isTie ? "It's a TIE!" : ""}
    </h2>
    <Row id="resrow">
      <Col>
      <h2 id="winner">WINNER</h2>
      <div 
      className="winner"
      className="w3-center w3-animate-left"
      >
      <span id="winTeam"
      >
      {resultsObj ? resultsObj.winner : "Please start a game"}
      </span>
      <p>
        ---Starting Lineup---
      </p>
      <ul id="players">
        <li id="playpos">
        {winnerPlayers.PG} (PG)
        </li>
        <li>
        {winnerPlayers.SG} (SG)
        </li>
        <li>
        {winnerPlayers.SF} (SF)
        </li>
        <li>
        {winnerPlayers.PF} (PF)
        </li>
        <li>
        {winnerPlayers.C} (C)
        </li>
      </ul>
      <p>
      ---Box Scores---
      </p>
      </div>        
      </Col>
      <Col>
      <h2 id="loser">LOSER</h2>
      <div 
      className="loser"
      className="w3-center w3-animate-right"
      >
      <span id="loseTeam"
        >
        {resultsObj ? resultsObj.loser : "Please start a game"}
        </span>
        <p>
        ---Starting Lineup---
      </p>

        <ol id="players">
          <li id="playpos">
          {loserPlayers.PG} (PG)
          </li>
          <li>
          {loserPlayers.SG} (SG)
          </li>
          <li>
          {loserPlayers.SF} (SF)
          </li>
          <li>
          {loserPlayers.PF} (PF)
          </li>
          <li>
          {loserPlayers.C} (C)
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