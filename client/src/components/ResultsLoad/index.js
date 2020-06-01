import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ResultsLoad() {
var resultsObj={};
let winnerTeam;
let loserTeam;
let winnerPlayers = {};
let loserPlayers = {};
let winnerStats;
let loserStats;
let winScore;
let loseScore;
let winHalfScore;
let loseHalfScore;


resultsObj = JSON.parse(localStorage.getItem("gametime"))
if (!resultsObj) {
  resultsObj={};
}

if (resultsObj.winner === resultsObj.team1.team)  {
  winnerTeam = resultsObj.team1.team;
  loserTeam = resultsObj.team2.team;
  winnerPlayers = resultsObj.team1.players[0];
  loserPlayers = resultsObj.team2.players[0];
  winnerStats = resultsObj.team1.statistics[0];
  loserStats = resultsObj.team2.statistics[0];
  winScore = resultsObj.team1Score;
  loseScore = resultsObj.team2Score;
  winHalfScore = resultsObj.team1HalfScore;
  loseHalfScore = resultsObj.team2HalfScore;
}
else if (resultsObj.winner === resultsObj.team2.team) {
  winnerTeam = resultsObj.team2.team;
  loserTeam = resultsObj.team1.team;
  winnerPlayers = resultsObj.team2.players[0];
  loserPlayers = resultsObj.team1.players[0];
  winnerStats = resultsObj.team2.statistics[0];
  loserStats = resultsObj.team1.statistics[0];
  winScore = resultsObj.team2Score;
  loseScore = resultsObj.team1Score;
  winHalfScore = resultsObj.team2HalfScore;
  loseHalfScore = resultsObj.team1HalfScore;
} 
else {
  winnerTeam = resultsObj.team1.team;
  loserTeam = resultsObj.team2.team;
  winnerPlayers = resultsObj.team1.players[0];
  loserPlayers = resultsObj.team2.players[0];
  winnerStats = resultsObj.team1.statistics[0];
  loserStats = resultsObj.team2.statistics[0];
  winScore = resultsObj.team1Score;
  loseScore = resultsObj.team2Score
  winHalfScore = resultsObj.team1HalfScore;
  loseHalfScore = resultsObj.team2HalfScore;
}



//team1Players.push(resultsObj.team1.players[0])
//console.log("this is the results object: ", resultsObj)


  return(
    <div className="resultWrapper">
    <h2 id="tieHead">
      {resultsObj.isTie ? "End of regulation is a TIE!" : ""}
    </h2>
    <Row id="resrow">
      <Col>
      <h2 id={resultsObj.winner ? "winner" : ""}>
      {resultsObj.winner ? "WINNER" : ""}</h2>
      <div 
      className="winner"
      className="w3-center w3-animate-left"
      >
      <span id={resultsObj.winner ? "winTeam" : "team"}
      >
      {resultsObj.winner ? resultsObj.winner : winnerTeam}
      </span>
      <p id="lineup">
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
      <p id="lineup">
      ---Box Scores---
      </p>
      <ol id="boxscore">
          <li id="scoreHead">
          Final Score: <span id="finalScore">{winScore}</span>
          </li>
          <li>
          Score at Halftime: <span>{winHalfScore}</span>
          </li>
          <li>
          Assists: <span>{winnerStats.assists}</span>
          </li>
          <li>
          Rebounds: <span>{winnerStats.rebounds}</span>
          </li>
          <li>
          Turnovers: <span>{winnerStats.turnovers}</span>
          </li>
          <li>
          Steals: <span>{winnerStats.steals}</span>
          </li>
          <li>
          Blocks: <span>{winnerStats.blocks}</span>
          </li>
          <li>
          Field Goal Pct: <span>{winnerStats.fgPercentage}%</span>
          </li>
          <li>
          Freethrow Pct: <span>{winnerStats.ftPercentage}%</span>
          </li>
          <li>
          3-Pt Field Goal Pct: <span>{winnerStats.threePtPercentage}%</span>
          </li>
        </ol>
      </div>        
      </Col>
      <Col>
      <h2 id={resultsObj.loser ? "loser" : ""}>
      {resultsObj.loser ? "LOSER" : ""}</h2>
      <div 
      className="loser"
      className="w3-center w3-animate-right"
      >
      <span id={resultsObj.loser ? "loseTeam": "team"}
        >
        {resultsObj.loser ? resultsObj.loser : loserTeam}
        </span>
        <p id="lineup">
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
        <p id="lineup">
        ---Box Scores---
        </p>
        <ol id="boxscore">
          <li id="scoreHead">
          Final Score: <span id="finalScore">{loseScore}</span>
          </li>
          <li>
          Score at Halftime: <span>{loseHalfScore}</span>
          </li>
          <li>
          Assists: <span>{loserStats.assists}</span>
          </li>
          <li>
          Rebounds: <span>{loserStats.rebounds}</span>
          </li>
          <li>
          Turnovers: <span>{loserStats.turnovers}</span>
          </li>
          <li>
          Steals: <span>{loserStats.steals}</span>
          </li>
          <li>
          Blocks: <span>{loserStats.blocks}</span>
          </li>
          <li>
          Field Goal Pct: <span>{loserStats.fgPercentage}%</span>
          </li>
          <li>
          Freethrow Pct: <span>{loserStats.ftPercentage}%</span>
          </li>
          <li>
          3-Pt Field Goal Pct: <span>{loserStats.threePtPercentage}%</span>
          </li>
        </ol>
      </div>
      </Col>
      </Row>
      </div>
  )
}

export default ResultsLoad;