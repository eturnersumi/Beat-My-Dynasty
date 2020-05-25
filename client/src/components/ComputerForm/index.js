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
    console.log("generate teams function", firstPick, secondPick)
    setTeamOne(firstPick);
    setTeamTwo(secondPick);
   calculateWinner(firstPick, secondPick)
  }

  function calculateWinner(team1, team2) {
    if (JSON.stringify(team1) === '{}' || JSON.stringify(team2) === '{}') {
      console.log("CALCULATE FUNCTION NOT RUNNING")
      return;
    }
    else {
    // console.log("calculate winner function", firstPick, secondPick)
    console.log("calculate function team 1: ", team1)
    console.log("calculate function team 2: ", team2)
    // console.log("team 1 points: ", firstPick.statistics[0].points)
    // console.log("team 1 assists: ", firstPick.statistics[0].assists)
      // let team1=firstPick;
      // let team2=secondPick;
      let score1;
      let score2;
      let winner;
      let loser;
      let tie;

      let stats1 = team1.statistics[0];
      let stats2 = team2.statistics[0];

      if (stats1.points > stats2.points) {
        winner=team1.team;
        loser=team2.team;
        tie=false;
        console.log("*******winner is: ", winner, " loser is: ", loser)
      }
      else if (stats2.points > stats1.points) {
        winner=team2.team;
        loser=team1.team;
        tie=false;
        console.log("********winner is: ", winner, " loser is: ", loser)
      }
      else {
        tie=true;
        winner="";
        loser="";
        console.log("********it's a tie!")
      }
      // playGame(winner, loser, tie);
      // //console.log("winner is: ", winner, "loser is: ", loser)
      // return {winner, loser, tie};
      var obj = {
        "team1": team1,
        "team2": team2,
        "winner": winner,
        "loser": loser,
        "isTie": tie
      };
      console.log("this is the object: ", obj)
      storage(obj);
  }
  }


  // function playGame(win, lose, tie) {
  //   //redirect to results page 
  //   console.log("-------play game method: ", win, lose, tie)
  //   return {win, lose, tie};
  // }
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