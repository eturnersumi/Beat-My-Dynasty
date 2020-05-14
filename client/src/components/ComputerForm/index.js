import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.css";


function ComputerForm() {
const [teams, setTeams] = useState([])

  useEffect(() => {
    setTeam()
  }, [])

  function setTeam() {
    API.getTeams()
      .then(res =>
        setTeams(res.data)
        )
        .catch(err => console.log(err));
  }

  function generateTeams() {
    let teamOne;
    let teamTwo;
  }

  // function getRandom(rand) {
  //   random = (Math.floor(Math.random(rand)) *10)
  // }

  return(
    <div>     
    <div className="row">
    <div className="teamList">
      <h2 className="teamsHead">Teams &emsp;</h2>
       <table>
       <tbody>
       {teams.map(team => (
        <tr key={team._id}>
        <td>{team.team}</td>
        
        </tr>
        ))}
       </tbody>
       </table> 
    </div>
    
    <div className="box" >
      <h2 className="card-title">Your Team &emsp;</h2>
      <img className="card-img-top" src="" alt="teamOne" />
      <p>
        team #1 name 
      </p>
    </div>

    <div className="box" >
    <br />
      <h2 className="card-title">VS &emsp;</h2>
    </div>
    
    <div className="box">
      <h2 className="card-title">Computer's Team &emsp;</h2>
      <img className="card-img-top" src="" alt="teamTwo" />
      <p>
        team #2 name
      </p>
    </div>
    <div className="btn">
    <br />
    <br />
    <button
    onClick={generateTeams}
    >
    Generate Match!
    </button>
    </div>
    </div>
    </div>
  )
  }

  export default ComputerForm;