import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";


function ComputerForm() {
const [teams, setTeams] = useState([])
const [teamOne, setTeamOne] = useState({})
const [teamTwo, setTeamTwo] = useState({});
let teamExport;

  useEffect(() => {
    setTeam()
  }, [])

  function setTeam() {
    API.getTeams()
      .then(res =>{
        setTeams(res.data)
        teamExport = res.data;
      }
        )
        .catch(err => console.log(err));
  }

  useEffect(() => {
    console.log("team #1: ", teamOne)
  }, [teams,teamOne]);

  useEffect(() => {
    console.log("team #2 ", teamTwo)
  }, [teams, teamTwo]);

  function generateTeams(e) {
    const firstPick = teams[Math.floor(Math.random()*teams.length)];
    const secondPick = teams[Math.floor(Math.random()*teams.length)];
    setTeamOne(firstPick);
    setTeamTwo(secondPick);
   calculateWinner(firstPick, secondPick)
  }

  function calculateWinner(team1, team2) {
    if (JSON.stringify(team1) === '{}' || JSON.stringify(team2) === '{}') {
      return;
    }
    else {
    
      let team1Score=50;
      let team2Score=50;
      let winner;
      let loser;
      let tie;
      let team1half;
      let team2half;

      let stats1 = team1.statistics[0];
      let stats2 = team2.statistics[0];

      if (stats1.points > stats1.opponentPoints) {
        team1Score+= stats1.points - stats1.opponentPoints;
        team1half=team1Score;
        console.log("+ team1 oppPt difference", team1Score)
      }
      if (stats2.points > stats2.opponentPoints) {
        team2Score+= stats2.points - stats2.opponentPoints;
        team2half=team2Score;
        console.log("+ team2 oppPt difference", team2Score)
      }
      if (stats1.assists > stats2.assists) {
        team1Score+=3;
        team2Score+=1;
        console.log("Assists-team1 vs team2", team1Score, team2Score)
      }
      else if (stats2.assists > stats1.assists) {
        team2Score+=3;
        team1Score+=1;
        console.log("Assists-team1 vs team2", team1Score, team2Score)
      }
      team1Score+=stats1.steals;
      team2Score+=stats2.steals;
      console.log("Steals-team1 vs team2", team1Score, team2Score)
      if (stats1.fgPercentage > stats2.fgPercentage) {
        team1Score+=3;
        team2Score+=1;
        console.log("fg%-team1 vs team2", team1Score, team2Score)
      }
      else if (stats2.fgPercentage > stats1.fgPercentage) {
        team2Score+=3;
        team1Score+=1;
        console.log("fg%-team1 vs team2", team1Score, team2Score)
      }
      if (stats1.threePtPercentage > stats2.threePtPercentage) {
        team1Score+=3;
        team2Score+=1;
        console.log("3pt%-team1 vs team2", team1Score, team2Score)
      }
      else if (stats2.threePtPercentage > stats1.threePtPercentage) {
        team2Score+=3;
        team1Score+=1;
        console.log("3pt%-team1 vs team2", team1Score, team2Score)
      }
      if (stats1.ftPercentage > stats2.ftPercentage) {
        team1Score+=3;
        team2Score+=1;
        console.log("FT%-team1 vs team2", team1Score, team2Score)
      }
      else if (stats2.ftPercentage > stats1.ftPercentage) {
        team2Score+=3;
        team1Score+=1;
        console.log("FT%-team1 vs team2", team1Score, team2Score)
      }
      team1Score+= stats1.blocks;
      team2Score+= stats2.blocks;
      console.log("blocks-team1 vs team2", team1Score, team2Score)

      team1Score-= stats1.turnovers;
      team2Score-= stats2.turnovers;
      console.log("turnovers-team1 vs team2", team1Score, team2Score)

      team1Score+= stats1.rebounds;
      team2Score+= stats2.rebounds;
      console.log("rebounds-team1 vs team2", team1Score, team2Score)

      if (stats1.offenseRating > stats2.offenseRating) {
        team1Score+=3;
        team1Score+=1;
        console.log("offRating-team1 vs team2", team1Score, team2Score)
      }
      else if (stats2.offenseRating > stats1.offenseRating) {
        team2Score+=5;
        team1Score+=1;
        console.log("offRating-team1 vs team2", team1Score, team2Score)
      }
      if (stats1.defenseRating < stats2.defenseRating) {
        team2Score-=5;
        console.log("defRating-team1 vs team2", team1Score, team2Score)
      }
      else if (stats2.defenseRating < stats1.defenseRating) {
        team1Score-=5;
        console.log("defRating-team1 vs team2", team1Score, team2Score)
      }
      team1Score-= stats2.opponentTurnoversPG;
      team2Score-= stats1.opponentTurnoversPG;
      console.log("oppTOs-team1 vs team2", team1Score, team2Score)



      if (team1Score > team2Score) {
        winner=team1.team;
        loser=team2.team;
        tie=false;
      }
      else if (team2Score > team1Score) {
        winner=team2.team;
        loser=team1.team;
        tie=false;
      }
      else {
        tie=true;
        winner="";
        loser="";
      }
     
      var obj = {
        "team1": team1,
        "team2": team2,
        "winner": winner,
        "loser": loser,
        "isTie": tie,
        "team1Score": team1Score,
        "team2Score": team2Score,
        "team1HalfScore": team1half,
        "team2HalfScore": team2half
      };
      storage(obj);
  }
  }

  function storage(obj) {
    localStorage.setItem("gametime", JSON.stringify(obj))
  }


  return(
    <div className="compWrapper"> 
    <p>
      Use the pick teams button to randomly select 2 dynasties.
    </p>    
    <Row id="compRow">
    <Col>
      <h2 
      className="w3-center w3-animate-left"
      id="yours">Your Team &emsp;</h2>
      <p 
      className="teamName"
      id="teamOne"
      >
        {teamOne ? teamOne.team : " "} 
      </p>
      <img className="teamOneimg card-img-top" src="" />
    </Col>
    
    
    <br />
      <h2>VS &emsp;</h2>
    <Col>
      <h2 
      className="w3-center w3-animate-right"
      id="opponent">Opponent &emsp;</h2>
      <p 
      className="teamName"
      id="teamTwo"
      >
      {teamTwo ? teamTwo.team : " "} 
      </p>
      <img className="teamTwoimg card-img-top" src="" />
    </Col>
    <Col>
    <button
    className="pick"
    onClick={generateTeams}
    >
    PICK TEAMS
  </button>
  <button
        className="play"
        id="play"
        >
        <Link
        to= "/results"
        className={window.location.pathname === "/results"
        ? "nav-link active"
        : "nav-link"
        }
        >
        GAME TIME
        </Link>
    </button>
    </Col>
    </Row>
    </div>
  )
  }

  export default ComputerForm;