import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.css";


function ManualForm() {
 //setting initial state
 const [teams, setTeams] = useState([])
 const [chosenTeamOne, setChosenTeamOne] = useState("")
 const [chosenTeamTwo, setChosenTeamTwo] = useState("")

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
     }
       )
       .catch(err => console.log(err));
 }

 
//  useEffect(() => {
//    selectTeam()
//  }, [])


 useEffect(() => {
console.log("1: ", chosenTeamOne)
}, [chosenTeamOne])

useEffect(() => {
  console.log("2: ", chosenTeamTwo)
  }, [chosenTeamTwo])

//  function selectTeam(e) {
//    console.log("Select team function: ", e)
   
//    // API.getTeam(id)
//    //   .then(res =>
//    //     setChosenTeam(res.data)
//    //     )
//    //     .catch(err => console.log(err));
//  }

 // function handlePick(e) {
   
 //   console.log(e);
 //   console.log(e.currentTarget)
 //   console.log(e.currentTarget.value.id)
 //   // var result = e.options[e.selectedIndex].value;
 //   // var result = e.options[e.index].value;
 //   // console.log(result);
 // }



 return(
   <div className="wrapper">
     <div className="row">
       <div className="col-sm-3">
        <h3>Team #1 </h3>
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
         <h3>Team #2 </h3>
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
       <br />
       <br />
       <br />
       <br />
       <button className="btn">GAME TIME</button>
       </div>
      
     </div>
   </div>
 )
};


export default ManualForm;