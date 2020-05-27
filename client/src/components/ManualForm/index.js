import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from '@material-ui/core/Button';
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
      console.log("this is the object: ", obj)
      storage(obj);
  }
  }

  function storage(obj) {
    localStorage.setItem("gametime", JSON.stringify(obj))
  }


 return(
   <div className="manWrapper">
      <p>
        Pick 2 dynasties to go toe to toe below.
      </p>
     <div id="manual">
             
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
       <div >
       </div>
       <br />
       <br />
     
       <Button id="manPlay" variant="contained" color="primary"
       >
       <Link
       to="/results"
       className={window.location.pathname === "/results"
       ? "nav-link active"
       : "nav-link"
       }
       >
       GAME TIME
     </Link> 
      </Button>
      
     </div>
   </div>
 )
};


export default ManualForm;