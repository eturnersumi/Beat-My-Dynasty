import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";


function ManualForm() {
 //setting initial state
 const [teams, setTeams] = useState([])
 const [chosenTeamOne, setChosenTeamOne] = useState({})
 const [chosenTeamTwo, setChosenTeamTwo] = useState({})

 //load all teams and store with setTeams
 useEffect(() => {
   loadTeams()
 }, [])

 //load all teams and set to teams
 function loadTeams() {
   API.getTeams()
     .then(res =>{
       setTeams(res.data)

      //set starting value to shown value for team 1 and 2
       setChosenTeamOne(res.data[0].team)
       setChosenTeamTwo(res.data[0].team)
       teamHandler(res.data)
     }
       )
       .catch(err => console.log(err));
 }

 useEffect(() => {
console.log("1: ", chosenTeamOne)
  teamHandler(chosenTeamOne)
}, [chosenTeamOne])

useEffect(() => {
  console.log("2: ", chosenTeamTwo)
  teamHandler(chosenTeamTwo)
  }, [chosenTeamTwo])


  function teamHandler() {
    let pick1=chosenTeamOne;
    let pick2=chosenTeamTwo;
    let teamList = teams;
    let team1;
    let team2;
    if (JSON.stringify(pick1) === '{}' || JSON.stringify(pick2) === '{}') {
      console.log("TEAM HANDLER SKIPPED")
      return;
    }
    console.log("team handler function: ", "#1", pick1, "#2", pick2)
    console.log("team handler function **teams: ", teamList)
    
    for (var i=0; i<teamList.length; i+=1) {
      if (teamList[i].team === pick1){
        team1=teamList[i];
        console.log("***!!!Found team 1", team1)
      }
    }
    for (var j=0; j<teamList.length; j+=1) {
      if (teamList[j].team === pick2) {
        team2=teamList[j];
        console.log("***!!!Found team 2: ", team2)
      }
    }
    calculateWinner(team1, team2);
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
      //playGame(winner, loser, tie);
      //console.log("winner is: ", winner, "loser is: ", loser)
      //return {winner, loser, tie};

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
   <div id="comp">
     <div id="manual">
       <div id="picks">
        <p id="teahead">Team #1 </p>
         <form className="pickOne">
           <select 
           value={chosenTeamOne}
           onChange={e=>setChosenTeamOne(e.target.value)}

           id="pickOne">
           {teams.map(team => (
               <option 
               key={team._id} 
               value={team.team}
               id={team.team}>
               {team.team}
               </option>
             ))}
           </select>
         </form>
         <br />
         <br />
         <p id="teahead">Team #2 </p>
         <form className="pickTwo">
         <select 
         value={chosenTeamTwo}
          onChange={e=>setChosenTeamTwo(e.target.value)}

       
         id="pickTwo">
         {teams.map(team => (
             <option 
             key={team._id}
             value={team.team}
             id={team.team}
             >
             {team.team}
             </option>
           ))}
         </select>
       </form>
         
       </div>
       <div>
       </div>
       <div >
       <br />
       <br />
     
       <button className="game">
       <Link
        to="/results"
        className={window.location.pathname === "/results"
        ? "nav-link active"
        : "nav-link"
        }
        >
        GAME TIME
        </Link>
        </button>
       </div>
      
     </div>
   </div>
 )
};


export default ManualForm;