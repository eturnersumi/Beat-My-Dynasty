import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.css";


function ComputerForm() {
const [teams, setTeams] = useState([])
const [teamOne, setTeamOne] = useState({})
const [teamTwo, setTeamTwo] = useState({});

  useEffect(() => {
    setTeam()
  }, [])

  function setTeam() {
    API.getTeams()
      .then(res =>{
        setTeams(res.data)
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
   // console.log("team1: ", e)
    setTeamOne(firstPick);
   setTeamTwo(secondPick);
  }

  function calculateWinner(firstPick, secondPick) {
    if (JSON.stringify(firstPick) === '{}' || JSON.stringify(secondPick) === '{}') {
      return;
    }
    else {
    console.log("calculate winner function", firstPick, secondPick)
    console.log("team 1 statistics", firstPick.statistics)
    console.log("team 1 points: ", firstPick.statistics[0].points)
    console.log("team 1 assists: ", firstPick.statistics[0].assists)
    playGame();
  }
  }


  function playGame() {
    //redirect to results page 
    console.log("play game method")
  }


  return(
    <div>     
    <div className="row">
    <div className="teamList">
      <h2 className="teamsHead">Teams &emsp;</h2>
       <table>
       <tbody>
       {teams.map(team => (
        <tr key={team._id}>
        <td
        name={team.team}
        >{team.team}</td>
        </tr>
        ))}
       </tbody>
       </table> 
    </div>
    
    <div className="box" >
      <h2 className="card-title">Your Team &emsp;</h2>
      <img className="teamOneimg card-img-top" src="" alt="teamOne" />
      <p 
      className="teamName"
      id="teamOne"
      >
        {teamOne ? teamOne.team : " "} 
      </p>
  
    </div>

    <div className="box" >
    <br />
      <h2 className="card-title">VS &emsp;</h2>
    </div>
    
    <div className="box">
      <h2 className="card-title">Opponent &emsp;</h2>
      <img className="teamTwoimg card-img-top" src="" alt="teamTwo" />
      <p 
      className="teamName"
      id="teamTwo"
      >
      {teamTwo ? teamTwo.team : " "} 
      </p>
    </div>
    <div className="btn">
    <button
    className="pick"
    onClick={generateTeams}
    >
    PICK TEAMS
    </button>
    <br />
    <br />
    <button
    className="play"
    onClick={calculateWinner(teamOne, teamTwo)}
    >
    GAME TIME
    </button>
    </div>
    </div>
    </div>
  )
  }

  export default ComputerForm;