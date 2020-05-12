import React, { useState, useEffect } from "react";
import Nav2 from "../components/Nav2";
import API from "../utils/API";
import { Link } from "react-router-dom";


function ManualGame() {
  //setting initial state
  const [teams, setTeams] = useState([])
  const [chosenTeam, setChosenTeam] = useState([])

  //load all teams and store with setTeams
  useEffect(() => {
    loadTeams()
  }, [])

  //load all teams and set to teams
  function loadTeams() {
    API.getTeams()
      .then(res =>
        setTeams(res.data)
        )
        .catch(err => console.log(err));
  }

  
  useEffect(() => {
    selectTeam()
  }, [])


  function selectTeam(id) {
    API.getTeam(id)
      .then(res =>
        setChosenTeam(res.data)
        )
        .catch(err => console.log(err));
  }



  return(
    <div>
    <h1>This is the Manual Game Page!</h1>
    <Nav2 />
      <div className="row">
        <div className="col">
          <form>
            <select id="teams" name="teams">
            {teams.map(team => (
                <option value key={team._id}>
                {team.team}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="col-sm-3">
        
        </div>
      </div>
      
    </div>
  )
};

export default ManualGame;